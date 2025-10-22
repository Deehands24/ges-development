import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

// Define the valid article slugs
const validSlugs = [
  'strategic-planning',
  'operational-excellence',
  'financial-management',
  'market-expansion',
  'digital-transformation',
]

// Generate static params for all articles
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }))
}

async function getArticle(slug: string) {
  if (!validSlugs.includes(slug)) {
    return null
  }

  const articlesDirectory = path.join(process.cwd(), 'src/content/articles', slug)
  const filePath = path.join(articlesDirectory, 'article.md')

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...data,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticle(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/#resources"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Resources
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Article Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{article.category}</span>
            </div>
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {article.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-accent prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-700 prose-li:my-2
            prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic
            prose-code:text-accent prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl
            prose-img:rounded-xl prose-img:shadow-lg"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-gradient-to-br from-accent/5 to-blue-700/5 rounded-2xl border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-700 mb-6">
            Our team specializes in helping businesses achieve their growth objectives through strategic consulting and proven methodologies.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-accent to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Author */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Written by <span className="font-semibold text-gray-900">{article.author}</span>
          </p>
        </div>
      </article>
    </div>
  )
}
