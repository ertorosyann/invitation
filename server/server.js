import express from 'express'
import cors from 'cors'
import xlsx from 'xlsx'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import TelegramBot from 'node-telegram-bot-api'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3002

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '8547608782:AAF6v4lnBTOaYS3lTohTlMzIzWpF6nmP30s'
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true })

let adminChatId = null

// Middleware
app.use(cors({
  origin: '*',  // Allow all origins
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}))
app.use(express.json())

// Request logging
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`)
  next()
})

// Excel file path
const EXCEL_FILE = path.join(__dirname, 'guests.xlsx')

// Initialize Excel file if it doesn't exist
function initializeExcelFile() {
  if (!fs.existsSync(EXCEL_FILE)) {
    const workbook = xlsx.utils.book_new()
    const worksheet = xlsx.utils.aoa_to_sheet([
      ['Side', 'Name', 'Guest Count']
    ])
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Guests')
    xlsx.writeFile(workbook, EXCEL_FILE)
    console.log('✅ Created new guests.xlsx file')
  }
}

// Add RSVP to Excel
app.post('/api/rsvp', (req, res) => {
  console.log('📥 Received RSVP data:', req.body)

  try {
    const { side, name, guestCount } = req.body

    // Validate data
    if (!side || !name) {
      console.log('❌ Validation failed - missing fields')
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      })
    }

    // Read existing Excel file
    const workbook = xlsx.readFile(EXCEL_FILE)
    const worksheet = workbook.Sheets['Guests']
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 })

    // Add new row (no timestamp, no attendance)
    const newRow = [
      side,
      name,
      guestCount || '1'
    ]

    data.push(newRow)

    // Write back to Excel
    const newWorksheet = xlsx.utils.aoa_to_sheet(data)
    workbook.Sheets['Guests'] = newWorksheet
    xlsx.writeFile(workbook, EXCEL_FILE)

    // Calculate total guests
    const totalGuests = data.slice(1).reduce((sum, row) => {
      const count = parseInt(row[2]) || 0
      return sum + count
    }, 0)

    console.log(`✅ New RSVP added: ${name} (${side})`)
    console.log(`📊 Total guests: ${totalGuests}`)

    // Send notification to Telegram
    if (adminChatId) {
      bot.sendMessage(adminChatId,
        `🎉 Նոր հաստատում!\n\n` +
        `👤 Անուն: ${name}\n` +
        `📍 Կողմ: ${side}\n` +
        `👥 Հյուրեր: ${newRow[2]}\n\n` +
        `📊 Ընդհանուր հյուրեր: ${totalGuests}`
      )
    }

    res.json({
      success: true,
      message: 'RSVP saved successfully',
      totalGuests
    })

  } catch (error) {
    console.error('❌ Error saving RSVP:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// Get total guest count
app.get('/api/rsvp/count', (req, res) => {
  try {
    if (!fs.existsSync(EXCEL_FILE)) {
      return res.json({ totalGuests: 0, totalRSVPs: 0 })
    }

    const workbook = xlsx.readFile(EXCEL_FILE)
    const worksheet = workbook.Sheets['Guests']
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 })

    const totalGuests = data.slice(1).reduce((sum, row) => {
      const count = parseInt(row[2]) || 0
      return sum + count
    }, 0)

    res.json({
      totalGuests,
      totalRSVPs: data.length - 1


    })

  } catch (error) {
    console.error('❌ Error reading guest count:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// Telegram Bot Commands
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id
  adminChatId = chatId
  bot.sendMessage(chatId,
    '👋 Բարի գալուստ!\n\n' +
    '📊 Հասանելի հրամաններ:\n' +
    '/guests - Ստանալ հյուրերի ցուցակը Excel ֆայլում\n' +
    '/count - Հյուրերի ընդհանուր թիվը\n\n' +
    'Ես Ձեզ ծանուցում կուղարկեմ ամեն նոր հաստատման ժամանակ! 🎉'
  )
  console.log(`✅ Admin chat registered: ${chatId}`)
})

bot.onText(/\/guests/, (msg) => {
  const chatId = msg.chat.id

  if (!fs.existsSync(EXCEL_FILE)) {
    bot.sendMessage(chatId, '❌ Հյուրերի ցուցակը դեռ դատարկ է')
    return
  }

  bot.sendDocument(chatId, EXCEL_FILE, {}, {
    filename: 'wedding-guests.xlsx',
    contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  }).then(() => {
    console.log('✅ Excel file sent to Telegram')
  }).catch(error => {
    console.error('❌ Error sending file to Telegram:', error)
    bot.sendMessage(chatId, '❌ Սխալ՝ ֆայլի ուղարկման ժամանակ')
  })
})

bot.onText(/\/count/, (msg) => {
  const chatId = msg.chat.id

  if (!fs.existsSync(EXCEL_FILE)) {
    bot.sendMessage(chatId, '📊 Հյուրեր: 0\nՀաստատումներ: 0')
    return
  }

  try {
    const workbook = xlsx.readFile(EXCEL_FILE)
    const worksheet = workbook.Sheets['Guests']
    const data = xlsx.utils.sheet_to_json(worksheet, { header: 1 })

    const totalGuests = data.slice(1).reduce((sum, row) => {
      const count = parseInt(row[2]) || 0
      return sum + count
    }, 0)

    const totalRSVPs = data.length - 1

    bot.sendMessage(chatId,
      `📊 Վիճակագրություն:\n\n` +
      `👥 Ընդհանուր հյուրեր: ${totalGuests}\n` +
      `📝 Հաստատումներ: ${totalRSVPs}`
    )
  } catch (error) {
    bot.sendMessage(chatId, '❌ Սխալ՝ տվյալների կարդալու ժամանակ')
  }
})

// Helper function to send Excel to Telegram
function sendGuestsToTelegram() {
  if (adminChatId && fs.existsSync(EXCEL_FILE)) {
    bot.sendDocument(adminChatId, EXCEL_FILE, {}, {
      filename: 'wedding-guests.xlsx',
      contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
  }
}

// Initialize and start server
initializeExcelFile()

app.listen(PORT, () => {
  console.log(`🎉 Wedding RSVP Backend API running on http://localhost:${PORT}`)
  console.log(`📊 Excel file location: ${EXCEL_FILE}`)
  console.log(`🤖 Telegram Bot active - Send /start to your bot to begin`)
  console.log(`🌐 Frontend should run on http://localhost:3000 (npm run dev)`)
})

