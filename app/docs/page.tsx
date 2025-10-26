import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Book, Code, ExternalLink, Shield, Zap } from "lucide-react"

const docSections = [
  {
    icon: Book,
    title: "Getting Started",
    description: "Quick start guide to set up your first chatbot",
    items: ["Installation & Setup", "Creating Your First Bot", "Basic Configuration", "Testing Your Chatbot"],
    badge: "Beginner",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation and code examples",
    items: ["Authentication", "Endpoints Overview", "Request/Response Format", "Error Handling"],
    badge: "Developer",
  },
  {
    icon: Zap,
    title: "Advanced Features",
    description: "Leverage powerful features for complex use cases",
    items: ["Natural Language Processing", "Custom Integrations", "Webhook Configuration", "Analytics & Reporting"],
    badge: "Advanced",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Best practices for secure chatbot deployment",
    items: ["Data Protection", "GDPR Compliance", "Authentication Methods", "Security Best Practices"],
    badge: "Security",
  },
]

const quickLinks = [
  { title: "API Keys", description: "Manage your API authentication", href: "#" },
  { title: "Webhooks", description: "Set up real-time notifications", href: "#" },
  { title: "SDKs", description: "Official libraries and tools", href: "#" },
  { title: "Changelog", description: "Latest updates and releases", href: "#" },
]

export default function Docs() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
            Documentation
          </h1>
          <p className="text-lg sm:text-xl font-semibold bg-white/40 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-sky-200/30 text-sky-700 mb-8 max-w-3xl mx-auto">
            Everything you need to build, deploy, and manage <span className="font-bold bg-linear-to-r from-sky-600 via-sky-500 to-blue-600 bg-clip-text text-transparent">intelligent AI voice assistants</span> with DigitalBot.ai
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View API Reference
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-accent" />
                    </div>
                    <Badge variant="secondary">{section.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{section.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center text-sm text-muted-foreground hover:text-accent transition-colors cursor-pointer"
                      >
                        <ArrowRight className="h-3 w-3 mr-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
                  >
                    Explore Section
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quick Links</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jump to the most commonly accessed resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card
                key={index}
                className="border-border bg-card hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
