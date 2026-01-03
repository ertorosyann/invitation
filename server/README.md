# Wedding RSVP Server

This server handles RSVP submissions, saves them to Excel, and sends updates via Telegram bot.

## 🚀 Quick Start

### Development (Local):
```bash
npm run dev:all
```

This starts:
- Frontend (Vite): http://localhost:3000
- Backend (Express): http://localhost:3002
- Telegram Bot: Active

### Production (Server):

**Step 1: Build**
```bash
npm run build
```

**Step 2: Start Everything**
```bash
npm run prod:all
```

This starts:
- Frontend (Static): http://localhost:3000
- Backend (API): http://localhost:3002
- Telegram Bot: Active

### Setup Telegram Bot

1. Open Telegram and send `/start` to your bot
2. The bot will register your chat and start sending notifications

## 🤖 Telegram Bot Commands

Send these commands to your Telegram bot:

- `/start` - Register your chat and start receiving notifications
- `/guests` - Receive the Excel file with all guest data
- `/count` - Get total guest count and RSVP statistics

### Auto-Notifications:

The bot will automatically send you a message every time someone submits an RSVP! 📬

## 📊 Excel File

The guest data is saved in: `server/guests.xlsx`

### Excel Structure:
| Side | Name | Guest Count |
|------|------|-------------|
| Հարսի կողմ | Անի Պետրոսյան | 2 |
| Փեսայի կողմ | Արամ Սարգսյան | 3 |
| Հարսի կողմ | Մարիամ Ավագյան | 4 |

### Features:
- ✅ **Auto-append**: New submissions add to bottom
- ✅ **Never overwrites**: All data is preserved
- ✅ **Simple format**: Side | Name | Guest Count
- ✅ **Total calculation**: Automatically sums all guests
- ✅ **Open anytime**: Excel file can be opened in Microsoft Excel, Google Sheets, LibreOffice

## 🔧 API Endpoints

### POST /api/rsvp
Save new RSVP submission and notify via Telegram
```javascript
POST http://localhost:3001/api/rsvp
Content-Type: application/json

{
  "side": "Հարսի կողմ",
  "name": "Անի Պետրոսյան",
  "guestCount": "2"
}
```

**What happens:**
1. ✅ Data saved to Excel
2. ✅ Instant Telegram notification sent
3. ✅ Total guest count updated

### GET /api/rsvp/count
Get total guest count
```javascript
GET http://localhost:3001/api/rsvp/count

Response:
{
  "totalGuests": 45,
  "totalRSVPs": 18
}
```

## 📝 Notes

- The Excel file is created automatically on first run
- Each submission appends a new row
- Guest count defaults to 1 if not specified
- Server must be running for RSVP form to work
- You can open the Excel file anytime to view/edit guest list

## 🔒 Telegram Bot Setup

Your bot token is configured in `server.js`:
```javascript
const TELEGRAM_BOT_TOKEN = '8547608782:AAF6v4lnBTOaYS3lTohTlMzIzWpF6nmP30s'
```

**How to use:**
1. Start the server: `npm run server`
2. Open Telegram
3. Search for your bot
4. Send `/start` to activate notifications
5. You'll receive instant notifications for every new RSVP!
6. Send `/guests` anytime to download the Excel file

## 📬 Notification Example

When someone submits an RSVP, you'll receive:
```
🎉 Նոր հաստատում!

👤 Անուն: Անի Պետրոսյան
📍 Կողմ: Հարսի կողմ
👥 Հյուրեր: 2

📊 Ընդհանուր հյուրեր: 15
```

