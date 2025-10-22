# Complete Deployment Guide: Vercel + Namecheap + Email Migration

This guide covers deploying your GES Development site to Vercel and migrating email from Northwest Registered Agent to Namecheap.

---

## Part 1: Deploy to Vercel (10 minutes)

### Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: GES Development homepage"

# Create repo on GitHub.com, then:
git remote add origin https://github.com/YOUR-USERNAME/ges-development.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up with GitHub
2. Click **"Add New Project"**
3. **Import** your `ges-development` repository
4. Vercel auto-detects Next.js settings ✓
5. Click **"Deploy"**

**That's it!** Your site will be live at `ges-development.vercel.app` in ~2 minutes.

### Step 3: Test Your Deployment

Visit: `https://ges-development.vercel.app`

Check:
- [x] All sections load correctly
- [x] Navigation works
- [x] Mobile responsive
- [x] Images/icons display

---

## Part 2: Connect Custom Domain (ges-development.com)

### Option A: Point Namecheap Domain to Vercel (Recommended)

#### In Vercel Dashboard:

1. Go to your project → **Settings** → **Domains**
2. Add domain: `ges-development.com`
3. Add domain: `www.ges-development.com`
4. Vercel will show you DNS records to add

#### In Namecheap Dashboard:

1. Log in to **Namecheap**
2. Go to **Domain List** → Click **Manage** next to `ges-development.com`
3. Go to **Advanced DNS** tab
4. Delete all existing A/CNAME records for `@` and `www`
5. Add these records:

**For root domain (`ges-development.com`):**
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 76.76.21.21 | Automatic |

**For www subdomain:**
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | cname.vercel-dns.com | Automatic |

6. **Save all changes**
7. Wait 10-60 minutes for DNS propagation

#### Verify:

- Visit `ges-development.com` → Should show your site
- Visit `www.ges-development.com` → Should redirect to non-www
- Check for SSL (🔒 padlock in browser)

---

## Part 3: Email Migration (Northwest → Namecheap)

### Current Situation:
- **Domain:** Hosted at Northwest Registered Agent (NW)
- **Email:** Hosted at Northwest Registered Agent
- **Goal:** Move email to Namecheap ($1.88/month vs. NW's higher cost)

### Step 1: Set Up Namecheap Email BEFORE Migration

1. Go to **Namecheap Dashboard** → **Email**
2. Click **"Get Private Email"** for `ges-development.com`
3. Choose **Private Email** plan ($1.88/month/mailbox)
4. Select number of mailboxes you need
5. Complete purchase

### Step 2: Create Email Addresses on Namecheap

**Example: If you have:**
- `contact@ges-development.com`
- `info@ges-development.com`
- `yourname@ges-development.com`

1. In Namecheap Email dashboard, click **"Add Mailbox"**
2. Create each email address
3. Set passwords
4. **DO NOT delete NW emails yet!**

### Step 3: Forward Old Emails (Temporary Overlap)

**While DNS propagates, run both systems:**

#### In Northwest Registered Agent:

1. Log in to NW email panel
2. For each email, set up **forwarding**:
   - `contact@ges-development.com` → forward to `contact@ges-development.com` (Namecheap)
3. This ensures no emails are lost during transition

### Step 4: Update DNS for Email

#### In Namecheap Advanced DNS:

Add these **MX Records** (Namecheap will provide exact values):

| Type | Host | Value | Priority | TTL |
|------|------|-------|----------|-----|
| MX Record | @ | mx1.privateemail.com | 10 | Automatic |
| MX Record | @ | mx2.privateemail.com | 10 | Automatic |

Add **SPF Record** (prevents spam):

| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT Record | @ | v=spf1 include:spf.privateemail.com ~all | Automatic |

Add **DKIM Record** (Namecheap provides this in email settings):

| Type | Host | Value | TTL |
|------|------|-------|-----|
| TXT Record | default._domainkey | (Namecheap provides) | Automatic |

### Step 5: Test Email

**Wait 4-24 hours** for DNS propagation, then:

1. Send test email TO `contact@ges-development.com`
2. Check it arrives in **Namecheap webmail**
3. Send email FROM `contact@ges-development.com`
4. Check it's not flagged as spam (use mail-tester.com)

### Step 6: Migrate Old Emails (Optional)

**If you want to keep old email history:**

#### Manual Method:
1. Log in to **NW webmail**
2. Forward all important emails to new Namecheap address
3. Or download via IMAP to Outlook/Thunderbird, then re-upload

#### Automated Method:
- Use **imapsync** tool (technical, requires command line)
- Or hire a service like **MigrationWiz** (~$12)

### Step 7: Cancel Northwest Email (After 30 Days)

**Only after confirming everything works:**

1. Wait 30 days to ensure no issues
2. Download backup of all NW emails
3. Cancel NW email service
4. Keep domain registration at NW (or transfer to Namecheap if desired)

---

## Part 4: Email Client Setup (Namecheap)

### For Outlook, Apple Mail, Gmail App:

**Incoming (IMAP):**
- Server: `mail.privateemail.com`
- Port: `993`
- Security: SSL
- Username: `contact@ges-development.com`
- Password: (your Namecheap email password)

**Outgoing (SMTP):**
- Server: `mail.privateemail.com`
- Port: `465` or `587`
- Security: SSL/TLS
- Username: `contact@ges-development.com`
- Password: (same as above)

---

## Part 5: Post-Deployment Checklist

### Vercel Settings:

- [x] Custom domain connected
- [x] SSL certificate active (automatic)
- [x] Environment variables (if needed later for forms)
- [x] Analytics enabled (optional)

### Namecheap Settings:

- [x] DNS pointing to Vercel
- [x] MX records for email
- [x] SPF/DKIM records added
- [x] Email accounts created

### Email Migration:

- [x] New emails arriving at Namecheap
- [x] Can send from new email
- [x] Old emails forwarding (temporarily)
- [x] Spam score good (mail-tester.com)

### Site Quality:

- [x] All pages load at ges-development.com
- [x] SSL working (https://)
- [x] Mobile responsive
- [x] Forms working (when you add handlers)
- [x] Analytics tracking (when you add GA4)

---

## Cost Breakdown

| Service | Cost | Frequency |
|---------|------|-----------|
| Vercel (Hobby) | **FREE** | Forever |
| Namecheap Domain | ~$13/year | Annual |
| Namecheap Email (3 mailboxes) | $5.64/month | Monthly |
| **Total** | **~$81/year** | |

**Savings vs. Northwest:** Likely $100-300/year depending on NW pricing

---

## Troubleshooting

### Site not loading after DNS change:

- **Wait:** DNS can take up to 48 hours (usually 1-4 hours)
- **Clear cache:** Hard refresh browser (Ctrl+Shift+R)
- **Check DNS:** Use [whatsmydns.net](https://www.whatsmydns.net)

### Emails not arriving:

- **Check spam folder**
- **Verify MX records:** Use [mxtoolbox.com](https://mxtoolbox.com)
- **Wait:** MX changes can take 4-24 hours

### SSL certificate not working:

- Vercel auto-provisions SSL
- If not working after 1 hour, remove and re-add domain in Vercel

---

## Quick Reference: DNS Records

### For Vercel Hosting:
```
A Record: @ → 76.76.21.21
CNAME: www → cname.vercel-dns.com
```

### For Namecheap Email:
```
MX: @ → mx1.privateemail.com (Priority 10)
MX: @ → mx2.privateemail.com (Priority 10)
TXT: @ → v=spf1 include:spf.privateemail.com ~all
TXT: default._domainkey → (get from Namecheap)
```

---

## Timeline Summary

| Day | Action |
|-----|--------|
| **Day 1** | Deploy to Vercel, set up Namecheap email |
| **Day 1-2** | Update DNS records (site + email) |
| **Day 2-3** | DNS propagates, test everything |
| **Day 3-30** | Run both email systems (NW + Namecheap) |
| **Day 30+** | Cancel NW email service |

---

## Support

**Vercel Issues:** https://vercel.com/support
**Namecheap Support:** https://www.namecheap.com/support/

---

## Next Steps After Deployment

1. **Set up Google Analytics 4** (add tracking ID to layout.tsx)
2. **Configure form submissions** (use Vercel Forms or Formspree)
3. **Add actual images** (replace placeholders)
4. **Update content** (use files in `src/content/data/`)
5. **Create article pages** (see ARTICLE_SETUP_GUIDE.md)

---

**You're ready to go live! 🚀**

Questions? Just ask!
