# 🔧 Nginx Reverse Proxy Setup

## 🎯 Architecture

```
Internet Users
     ↓
http://178.160.249.7 (Port 80 - OPEN)
     ↓
Nginx Reverse Proxy
     ├─→ Static files from dist/ (Frontend)
     └─→ /api/* → 127.0.0.1:3002 (Backend - INTERNAL ONLY)
```

**Benefits:**
- ✅ Users only connect to port 80 (standard HTTP)
- ✅ Port 3002 stays CLOSED (secure!)
- ✅ Backend only accessible internally
- ✅ Professional setup

---

## 📋 **Step-by-Step Setup:**

### **1. Install Nginx**

```bash
sudo apt update
sudo apt install nginx -y
```

### **2. Build Your Project**

```bash
cd /path/to/wedding-react
npm install
npm run build
```

### **3. Update nginx.conf File**

Edit the `nginx.conf` file in your project:
```bash
nano nginx.conf
```

Change this line to your actual path:
```nginx
root /path/to/wedding-react/dist;
```

To:
```nginx
root /home/youruser/wedding-react/dist;
```

### **4. Copy Nginx Config to Sites**

```bash
# Copy your config
sudo cp nginx.conf /etc/nginx/sites-available/wedding

# Create symbolic link
sudo ln -s /etc/nginx/sites-available/wedding /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default
```

### **5. Test Nginx Configuration**

```bash
sudo nginx -t
```

Should say: "syntax is ok" and "test is successful"

### **6. Restart Nginx**

```bash
sudo systemctl restart nginx
sudo systemctl status nginx
```

### **7. Start Backend (Internal Only)**

```bash
cd /path/to/wedding-react
npm start
```

Or with PM2:
```bash
pm2 start server/server.js --name wedding-backend
pm2 save
pm2 startup
```

### **8. Configure Firewall**

```bash
# CLOSE port 3002 (keep it internal)
sudo ufw deny 3002

# OPEN port 80 for HTTP
sudo ufw allow 80

# OPEN port 443 for HTTPS (if using SSL later)
sudo ufw allow 443

# Check status
sudo ufw status
```

---

## ✅ **Verify It's Working:**

### **Test 1: Frontend**
```bash
curl http://178.160.249.7
```
Should return HTML

### **Test 2: API (through Nginx)**
```bash
curl http://178.160.249.7/api/rsvp/count
```
Should return: `{"totalGuests":0,"totalRSVPs":0}`

### **Test 3: Backend NOT accessible directly**
```bash
curl http://178.160.249.7:3002
```
Should FAIL (connection refused) ✅ - This is correct!

### **Test 4: Backend accessible internally**
```bash
# On your server
curl http://127.0.0.1:3002/api/rsvp/count
```
Should work ✅

---

## 🌐 **Access URLs:**

**Users access:**
- Website: `http://178.160.249.7`
- RSVP form submits to: `http://178.160.249.7/api/rsvp` (Nginx forwards to internal backend)

**Backend (internal only):**
- `http://127.0.0.1:3002` (only accessible from server itself)

---

## 🔄 **Updates & Deployment:**

When you update your site:

```bash
# Pull latest code (if using Git)
git pull

# Install any new dependencies
npm install

# Rebuild frontend
npm run build

# Restart backend
pm2 restart wedding-backend

# Reload Nginx (if config changed)
sudo systemctl reload nginx
```

---

## 🔒 **Security Check:**

```bash
# Port 3002 should be CLOSED
sudo ufw status | grep 3002
# Should show: DENY or not listed

# Port 80 should be OPEN
sudo ufw status | grep 80
# Should show: ALLOW

# Test backend is NOT accessible externally
curl http://178.160.249.7:3002
# Should FAIL ✅
```

---

## 📝 **Summary:**

| Port | Open? | Accessible From | Purpose |
|------|-------|-----------------|---------|
| 80 | ✅ Open | Internet | Nginx (frontend + API proxy) |
| 3002 | ❌ Closed | Localhost only | Backend (internal) |

**This is the secure, professional setup you want!** 🔒✨

