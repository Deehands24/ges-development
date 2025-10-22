# Guide: Setting Up Articles for the Resources Section

The Resources section is now configured to link to articles. Here are your options:

## Current Setup

The resource cards now link to article pages using the `slug` field:

```tsx
{
  title: 'Domain Due Diligence Checklist',
  description: '...',
  readTime: '8 min read',
  slug: '/resources/domain-due-diligence', // ← Links go here
}
```

---

## **Option 1: Next.js Blog Pages (Recommended for SEO)**

Create article pages right in your Next.js site for best SEO and control.

### Steps:

1. **Create the resources folder:**
```bash
mkdir -p src/app/resources
```

2. **Create individual article pages:**

```bash
# Create folders for each article
mkdir -p src/app/resources/domain-due-diligence
mkdir -p src/app/resources/30-day-seo-sprint
mkdir -p src/app/resources/affiliate-setup-guide
mkdir -p src/app/resources/lead-routing-architecture
mkdir -p src/app/resources/content-operations-playbook
```

3. **Add a page.tsx file to each folder:**

Example: `src/app/resources/domain-due-diligence/page.tsx`

```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domain Due Diligence Checklist | GES Development',
  description: 'How to vet domains for SEO history, backlink profile, and trademark issues before buying.',
}

export default function DomainDueDiligencePage() {
  return (
    <article className="min-h-screen py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12">
          <a href="/#resources" className="text-accent hover:underline mb-4 inline-block">
            ← Back to Resources
          </a>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Domain Due Diligence Checklist
          </h1>
          <p className="text-xl text-gray-600">
            How to vet domains for SEO history, backlink profile, and trademark issues before buying.
          </p>
          <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
            <span>8 min read</span>
            <span>•</span>
            <span>Updated Oct 2025</span>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2>Why Domain Due Diligence Matters</h2>
          <p>
            Your article content goes here. You can write it directly in JSX,
            or import from a markdown file, or fetch from a CMS.
          </p>

          <h2>Step 1: Check SEO History</h2>
          <p>Use tools like Ahrefs or Semrush to...</p>

          {/* Add your full article content */}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-blue-700/10 text-center">
          <h3 className="text-2xl font-bold mb-4">Need help building your digital property?</h3>
          <a
            href="/#pricing"
            className="inline-block px-8 py-3 bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </article>
  )
}
```

4. **Repeat for all 5 articles**

### Pros:
✅ Best for SEO (all content on your domain)
✅ Full control over design
✅ Fast page loads
✅ Integrated with your Next.js site

### Cons:
❌ More manual work to add new articles
❌ No built-in editor UI

---

## **Option 2: Markdown Files with MDX**

Write articles in Markdown for easier editing.

### Steps:

1. **Install MDX:**
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
```

2. **Create markdown files:**

`src/content/domain-due-diligence.mdx`:
```mdx
---
title: "Domain Due Diligence Checklist"
description: "How to vet domains for SEO history..."
readTime: "8 min read"
publishedAt: "2025-10-22"
---

# Domain Due Diligence Checklist

Your article content here in Markdown...

## Step 1: Check SEO History

Use tools like Ahrefs...
```

3. **Create a dynamic article page:**

`src/app/resources/[slug]/page.tsx` (handles all articles)

### Pros:
✅ Easy to write content (Markdown)
✅ Still on your domain (good SEO)
✅ One dynamic route handles all articles

### Cons:
❌ Requires MDX setup
❌ Need build process for new articles

---

## **Option 3: External Blog Platform**

Host articles on Notion, Medium, Ghost, or WordPress.

### Steps:

1. **Update the slugs to full URLs:**

```tsx
const guides = [
  {
    title: 'Domain Due Diligence Checklist',
    description: '...',
    readTime: '8 min read',
    slug: 'https://blog.ges-development.com/domain-due-diligence', // External URL
  },
  // ...
]
```

2. **Make links open in new tab (optional):**

In [Resources.tsx](src/components/Resources.tsx):
```tsx
<a
  key={index}
  href={guide.slug}
  target="_blank"  // ← Add this
  rel="noopener noreferrer"  // ← And this
  className="block"
>
```

### Pros:
✅ Easy content editing with CMS UI
✅ No code changes to publish
✅ Can use existing blog platform

### Cons:
❌ Less SEO benefit (external domain)
❌ Different design/branding
❌ Depends on third-party platform

---

## **Option 4: Headless CMS**

Use a headless CMS like Contentful, Sanity, or Strapi.

### Steps:

1. **Set up CMS and create articles**
2. **Fetch articles in your component:**

```tsx
// src/app/resources/[slug]/page.tsx
async function getArticle(slug: string) {
  const res = await fetch(`https://your-cms.com/api/articles/${slug}`)
  return res.json()
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug)

  return (
    <article>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  )
}
```

### Pros:
✅ Easy editing for non-technical team
✅ Content still on your domain
✅ API-driven, flexible

### Cons:
❌ Requires CMS setup & cost
❌ More complex architecture

---

## **My Recommendation for You**

Since you're getting articles written right now, I recommend:

### **Start with Option 1 (Next.js Pages)**

1. Create 5 folders in `src/app/resources/`
2. Copy the template above into each `page.tsx`
3. Paste your article content into the JSX
4. Deploy!

It's the simplest way to get started with full SEO benefits.

### **Later migrate to Option 2 (MDX)** if you want easier editing

---

## Quick Start Template

Want me to create a template article page for you? Just let me know and I'll generate:

- `src/app/resources/[slug]/page.tsx` (dynamic route)
- A reusable article layout component
- Styled article typography (prose styles)

Or if you prefer, I can set up the full MDX solution right now!

---

## Current Article Slugs

These are configured in [Resources.tsx](src/components/Resources.tsx):

1. `/resources/domain-due-diligence`
2. `/resources/30-day-seo-sprint`
3. `/resources/affiliate-setup-guide`
4. `/resources/lead-routing-architecture`
5. `/resources/content-operations-playbook`

Just create folders with these names in `src/app/resources/` and add `page.tsx` files!
