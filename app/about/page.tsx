import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Lightbulb, ArrowRight } from "lucide-react"

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    description: "Former AI researcher at Google with 10+ years in conversational AI development.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO & Co-Founder",
    description: "Ex-Microsoft engineer specializing in natural language processing and machine learning.",
  },
  {
    name: "Emily Watson",
    role: "Head of Product",
    description: "Product strategist with expertise in user experience and chatbot interface design.",
  },
  {
    name: "David Kim",
    role: "Lead AI Engineer",
    description: "PhD in Computer Science, focused on advancing conversational AI capabilities.",
  },
]

const values = [
  {
    icon: Target,
    title: "Customer-Centric",
    description: "Every feature we build is designed to solve real customer problems and drive business value.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push the boundaries of AI technology to deliver cutting-edge conversational experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in AI accuracy, security, and performance.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of human-AI collaboration to transform businesses.",
  },
]

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            About <span className="text-accent">DigitalBot.ai</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            We're on a mission to democratize AI-powered customer service, making intelligent chatbots accessible to
            businesses of all sizes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2021, DigitalBot.ai emerged from a simple observation: businesses were struggling to provide
                24/7 customer support while maintaining quality and personal touch. Our founders, with backgrounds in AI
                research and enterprise software, saw an opportunity to bridge this gap.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we serve over 10,000 businesses worldwide, processing millions of customer conversations daily.
                Our AI chatbots have evolved from simple rule-based systems to sophisticated conversational agents that
                understand context, emotion, and intent.
              </p>
              <Button className="bg-accent hover:bg-accent/90">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">10K+</div>
                    <div className="text-muted-foreground">Active Businesses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">50M+</div>
                    <div className="text-muted-foreground">Conversations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                    <div className="text-muted-foreground">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at DigitalBot.ai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border bg-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-card-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The brilliant minds behind DigitalBot.ai's innovative AI technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border bg-card">
                <CardHeader>
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                  <CardTitle className="text-card-foreground">{member.name}</CardTitle>
                  <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
