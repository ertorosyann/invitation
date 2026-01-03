# 🚀 Deployment Guide

## Quick Deploy to Server (2 Commands!)

### **Step 1: Build the project**
```bash
npm run build
```

### **Step 2: Start everything**
```bash
npm run prod:all
```

That's it! Your wedding website is now running! ✨

- Frontend: http://localhost:3000
- Backend API: http://localhost:3002

---

## 🔄 Auto-Start on Server Reboot

### **Using PM2 (Recommended)**

**1. Install PM2:**
```bash
npm install -g pm2
```

**2. Build your project:**
```bash
npm run build
```

**3. Start with PM2:**
```bash
pm2 start server/server.js --name wedding
```

**4. Save PM2 configuration:**
```bash
pm2 save
```

**5. Setup auto-start on boot:**
```bash
pm2 startup
```

Copy and run the command it shows you (with sudo).

**6. Done!** ✅

Your website will now:
- Auto-start when server reboots
- Auto-restart if it crashes
- Keep running forever

### **Useful PM2 Commands:**
```bash
pm2 list           # Show running processes
pm2 logs wedding   # View logs
pm2 restart wedding # Restart app
pm2 stop wedding   # Stop app
pm2 delete wedding # Remove from PM2
pm2 monit          # Real-time monitoring
```

---

## 📦 What Runs

When you run `npm start`:
1. ✅ **Express server** (Backend API)
2. ✅ **Static file server** (Serves your built React app)
3. ✅ **Telegram bot** (Auto-notifications)
4. ✅ **Excel database** (Saves RSVP data)

**All on one port (3001)!**

---

## 🌐 Access Your Site

### Development:
- **Frontend**: http://localhost:3000 (Vite dev server)
- **Backend API**: http://localhost:3002

### Production:
- **Frontend**: http://localhost:3000 (Static files)
- **Backend API**: http://localhost:3002

**Both must be running together!**

---

## 🔧 Server Setup Commands

### **On fresh server (Ubuntu/Debian):**

```bash
# 1. Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 2. Install PM2 globally
sudo npm install -g pm2

# 3. Go to your project folder
cd /path/to/wedding-react

# 4. Install dependencies
npm install

# 5. Build the project
npm run build

# 6. Start with PM2
pm2 start server/server.js --name wedding

# 7. Save PM2 config
pm2 save

# 8. Enable auto-start on boot
pm2 startup
# (Run the command it shows)

# 9. Verify it's running
pm2 list
```

### **Update your deployment:**

When you make changes:
```bash
# 1. Pull latest code (if using Git)
git pull

# 2. Install any new dependencies
npm install

# 3. Rebuild frontend
npm run build

# 4. Restart server
pm2 restart wedding
```

---

## 🎯 Summary

### **Development (Local):**
```bash
npm run dev:all
```

### **Production (Server):**
```bash
# First time
npm install
npm run build
pm2 start server/server.js --name wedding
pm2 save
pm2 startup

# After updates
npm run build
pm2 restart wedding
```

### **Quick Production Start (No PM2):**
```bash
npm run build
npm start
```

---

## ✅ Checklist

Before deploying:
- [ ] Run `npm run build` successfully
- [ ] Test `npm start` locally
- [ ] Setup Telegram bot (send `/start` to your bot)
- [ ] Configure firewall (open port 3001 or use reverse proxy)
- [ ] Optional: Setup domain name
- [ ] Optional: Add SSL/HTTPS with nginx reverse proxy

---

## 🔒 Production Tips

1. **Use Environment Variables** for sensitive data:
   ```bash
   export TELEGRAM_BOT_TOKEN="your-token"
   export PORT=3001
   ```

2. **Use Nginx as Reverse Proxy** (optional):
   - Serve on port 80/443 (standard HTTP/HTTPS)
   - Add SSL certificate
   - Better performance

3. **Monitor with PM2**:
   ```bash
   pm2 monit
   pm2 logs wedding --lines 100
   ```

4. **Backup Excel file regularly**:
   ```bash
   cp server/guests.xlsx server/backups/guests-$(date +%Y%m%d).xlsx
   ```

