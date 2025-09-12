import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI Customer Service: Trends to Watch in 2024",
    excerpt:
      "Explore the latest developments in conversational AI and how they're reshaping customer service experiences.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "AI Trends",
    featured: true,
  },
  {
    title: "How to Implement Your First Chatbot: A Step-by-Step Guide",
    excerpt:
      "Learn the essential steps to successfully deploy an AI chatbot for your business, from planning to launch.",
    author: "Marcus Rodriguez",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "Tutorial",
    featured: false,
  },
  {
    title: "Measuring Chatbot Success: Key Metrics That Matter",
    excerpt: "Discover the most important KPIs to track when evaluating your chatbot's performance and ROI.",
    author: "Emily Watson",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Analytics",
    featured: false,
  },
  {
    title: "Natural Language Processing: Making Chatbots More Human",
    excerpt: "Deep dive into NLP technologies that enable chatbots to understand and respond more naturally.",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Technology",
    featured: false,
  },
  {
    title: "Case Study: How TechCorp Increased Customer Satisfaction by 40%",
    excerpt: "Real-world example of how implementing AI chatbots transformed a company's customer service operations.",
    author: "Sarah Chen",
    date: "2023-12-20",
    readTime: "7 min read",
    category: "Case Study",
    featured: false,
  },
  {
    title: "Multi-Channel Chatbot Strategy: Reaching Customers Everywhere",
    excerpt: "Learn how to deploy chatbots across multiple platforms for a unified customer experience.",
    author: "Marcus Rodriguez",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Strategy",
    featured: false,
  },
]

export default function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            DigitalBot.ai <span className="text-accent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Insights, tutorials, and industry trends in AI chatbots and conversational AI technology.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-accent text-accent-foreground mb-4">Featured Post</Badge>
              <h2 className="text-3xl font-bold text-foreground">Latest Insights</h2>
            </div>
            <Card className="max-w-4xl mx-auto border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <CardTitle className="text-2xl text-card-foreground mb-4">{featuredPost.title}</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">{featuredPost.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-accent hover:bg-accent/90">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Recent Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest in AI chatbot technology and best practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-accent transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI chatbots and conversational AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
