# 🔧 Environment Variables Setup

## 📝 How to Configure Your Domain

### **Step 1: Create `.env` file**

Copy the example file:
```bash
cp env.example .env
```

Or create manually:
```bash
nano .env
```

### **Step 2: Add Your Domain**

Edit `.env` file:

**For Local Development:**
```env
VITE_API_URL=http://localhost:3002
```

**For Production (Your Server):**
```env
VITE_API_URL=https://your-domain.com
```

**Or with subdomain:**
```env
VITE_API_URL=https://api.your-domain.com
```

**Or with IP address:**
```env
VITE_API_URL=http://your-server-ip:3002
```

---

## 🎯 Examples

### **Example 1: Same Server, Different Ports**
```env
VITE_API_URL=http://your-domain.com:3002
```

Frontend: `http://your-domain.com:3000`  
Backend: `http://your-domain.com:3002`

### **Example 2: Using Nginx Reverse Proxy**
```env
VITE_API_URL=https://your-domain.com/api
```

Nginx forwards `/api/*` → `http://localhost:3002/*`

### **Example 3: Separate Domains**
```env
VITE_API_URL=https://api.wedding.com
```

Frontend: `https://wedding.com`  
Backend: `https://api.wedding.com`

---

## 🔄 After Changing .env

**You must rebuild the frontend:**
```bash
npm run build
```

Then restart:
```bash
npm run prod:all
# or
pm2 restart all
```

---

## ⚠️ Important Notes

1. **`.env` is gitignored** - Never commit it to Git
2. **`VITE_` prefix required** - Vite only exposes vars starting with `VITE_`
3. **No trailing slash** - Use `http://domain.com` not `http://domain.com/`
4. **Rebuild after changes** - Environment variables are baked into the build

---

## 🧪 Testing

After setting up, test the API URL:

1. Start the server: `npm run prod:all`
2. Open browser console (F12)
3. Submit an RSVP
4. Check Network tab - should call your configured URL

---

## 📁 Files

- `env.example` - Template (committed to Git)
- `.env` - Your actual config (not in Git)
- `.gitignore` - Ensures `.env` is never committed

