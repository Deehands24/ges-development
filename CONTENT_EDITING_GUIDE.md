# Content Editing Guide

## 🎯 How to Edit Your Site Content (No Coding Required!)

All your content is organized in easy-to-edit files. Here's where everything is:

---

## 📁 Content File Locations

### 1. **Hero Metrics** (Sites Launched, CTR, etc.)
**File:** `src/content/data/metrics.ts`

```typescript
export const heroMetrics = [
  {
    label: 'Sites Launched',
    value: 47,  // ← Change this number
    suffix: '+',
    prefix: '',
    verified: false, // ← Set to true when using real data
  },
  // ...
]
```

**To update:**
1. Open the file
2. Change the `value` number
3. Set `verified: true` when using real data
4. Save → Auto-deploys on Vercel

---

### 2. **Portfolio Properties**
**File:** `src/content/data/portfolio.ts`

```typescript
export const properties = [
  {
    name: 'PaintingA2',  // ← Property name
    niche: 'Local Service Lead Gen',  // ← What type of site
    traffic: '2.4K visits/mo',  // ← Monthly traffic
    monetization: ['Lead Forms', 'Call Tracking'],  // ← How it makes money
    outcome: 'Generates 30–45 qualified painting leads monthly...',  // ← Result
    verified: true,  // ← Is this real data or example?
  },
]
```

**To add a new property:**
1. Copy an existing property block
2. Update all the fields
3. Add a comma after the previous property
4. Save

---

### 3. **Testimonials**
**File:** `src/content/data/testimonials.ts`

```typescript
export const testimonials = [
  {
    quote: "GES took our painting business from zero...",  // ← Client quote
    author: 'Mike Henderson',  // ← Client name
    role: 'Owner',  // ← Job title
    company: 'Heritage Painting Co.',  // ← Company
    rating: 5,  // ← Star rating (1-5)
    verified: true,  // ← Is this a real testimonial?
  },
]
```

**To add/edit testimonials:**
1. Update the quote, author, role, company
2. Set `verified: true` for real clients
3. Save

---

### 4. **Articles** (Blog Posts)
**Folder:** `src/content/articles/`

**Files:**
- `domain-due-diligence.md`
- `30-day-seo-sprint.md`
- (more to come)

**These are Markdown files** - just write like you would in a Google Doc!

**Example:**
```markdown
# Article Title

This is a paragraph.

## Section Heading

- Bullet point 1
- Bullet point 2

**Bold text** and *italic text*

[Link text](https://url.com)
```

**To edit an article:**
1. Open the `.md` file
2. Edit the text (no HTML needed!)
3. Save → Rebuilds automatically

---

## 📝 Editing Components Directly (Slightly More Advanced)

If you want to change copy in the components themselves:

### Header Navigation
**File:** `src/components/Header.tsx`
**Line:** ~21

```tsx
const navItems = [
  { label: 'Portfolio', href: '#portfolio' },  // ← Change label here
  { label: 'Services', href: '#services' },
  // ...
]
```

### Hero Headline
**File:** `src/components/Hero.tsx`
**Lines:** ~50-56

```tsx
<h1 className="...">
  Build, Buy & Operate <br />  {/* ← Edit headline here */}
  <span className="...">
    Cash-Flowing Web Properties
  </span>
</h1>
```

### Pricing Tiers
**File:** `src/components/Pricing.tsx`
**Lines:** ~13-50

```tsx
const tiers = [
  {
    name: 'Starter',  // ← Tier name
    price: '$X,XXX',  // ← Price (replace with real number)
    description: 'Perfect for testing a single niche...',
    features: [
      'One property build',  // ← Feature list
      'Domain research & acquisition',
      // ...
    ],
  },
]
```

### FAQ Questions
**File:** `src/components/FAQ.tsx`
**Lines:** ~7-41

```tsx
const faqs = [
  {
    question: 'How long does it take to see results?',  // ← Question
    answer: 'Timeline varies by niche...',  // ← Answer
  },
]
```

---

## 🔄 Publishing Changes

### If using Vercel (connected to GitHub):

```bash
# After editing files:
git add .
git commit -m "Update: [what you changed]"
git push

# Vercel auto-deploys in ~2 minutes
```

### Watch deploy progress:
Go to [vercel.com/dashboard](https://vercel.com/dashboard) → Your project → Deployments

---

## ✏️ Markdown Cheat Sheet

Use this in article files (`.md`):

| What you want | Type this |
|---------------|-----------|
| **Bold text** | `**Bold text**` |
| *Italic text* | `*Italic text*` |
| # Big heading | `# Big heading` |
| ## Medium heading | `## Medium heading` |
| - Bullet list | `- Bullet list` |
| [Link](url) | `[Link text](https://url.com)` |
| Horizontal line | `---` |

---

## 🎨 What NOT to Change

**Avoid editing these unless you know what you're doing:**

- ❌ Anything in `className="..."`
- ❌ Files ending in `.config.ts` or `.config.js`
- ❌ The `node_modules/` folder
- ❌ Import statements at the top of files

**Safe to edit:**

- ✅ Text inside quotes: `"Hello"` or `'Hello'`
- ✅ Numbers: `value: 47`
- ✅ Arrays: `['Item 1', 'Item 2']`
- ✅ Entire `.md` files in `src/content/articles/`

---

## 🆘 Common Edits & Where to Find Them

| What to Update | File Location |
|----------------|---------------|
| Homepage metrics | `src/content/data/metrics.ts` |
| Portfolio properties | `src/content/data/portfolio.ts` |
| Testimonials | `src/content/data/testimonials.ts` |
| Pricing tiers | `src/components/Pricing.tsx` |
| FAQ questions | `src/components/FAQ.tsx` |
| Hero headline | `src/components/Hero.tsx` |
| Footer links | `src/components/Footer.tsx` |
| Company name/logo | `src/components/Header.tsx` |
| Blog articles | `src/content/articles/*.md` |

---

## 🚨 If You Break Something

**Don't panic!**

1. **Undo your last change** (Ctrl+Z)
2. **Or revert to last working version:**
   ```bash
   git reset --hard HEAD
   ```
3. **Or restore from GitHub:**
   - Go to your repo on GitHub
   - Find the file
   - Click "History"
   - Copy old version, paste back

---

## 💡 Pro Tips

1. **Make small changes** and test after each one
2. **Keep a backup** of files before big edits
3. **Use real data** and set `verified: true`
4. **Update metrics monthly** to keep them fresh
5. **Add new testimonials** as you get them

---

## 📞 Need Help?

- Can't find something? Search the project (Ctrl+Shift+F)
- Breaking errors? Check the browser console (F12)
- Deployment failing? Check Vercel logs

---

**Happy editing! 🎉**
