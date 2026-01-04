# 🔍 Debug Site Not Visible

Run these commands on your server:

## 1. Check Nginx Status
```bash
sudo systemctl status nginx
```
Should say "active (running)"

## 2. Check Nginx Error Logs
```bash
sudo tail -50 /var/log/nginx/error.log
```

## 3. Check if Backend is Running
```bash
pm2 list
```
Should show "wedding" as "online"

## 4. Test Nginx Config
```bash
sudo nginx -t
```
Should say "syntax is ok"

## 5. Check if dist folder exists
```bash
ls -la /path/to/wedding-react/dist/
```
Should show index.html and other files

## 6. Test locally on server
```bash
curl http://localhost
```
Should return HTML

## 7. Check firewall
```bash
sudo ufw status
```
Port 80 should be ALLOW

---

## Quick Fix Commands

```bash
# Restart everything
sudo systemctl restart nginx
pm2 restart wedding

# Check what's wrong
sudo nginx -t
pm2 logs wedding --lines 20
```

**Tell me what error you see!**


