import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  MessageSquare,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Smartphone,
  Code,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "Custom Chatbot Development",
    description: "Tailored AI chatbots designed specifically for your business needs and industry requirements.",
    features: [
      "Custom conversation flows",
      "Brand personality integration",
      "Industry-specific training",
      "Multi-platform deployment",
    ],
    popular: false,
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Platform",
    description: "Complete platform for building, deploying, and managing intelligent chatbots across all channels.",
    features: ["Drag-and-drop builder", "Pre-built templates", "Real-time analytics", "A/B testing tools"],
    popular: true,
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description:
      "Advanced NLP capabilities that understand context, sentiment, and intent for human-like conversations.",
    features: ["Intent recognition", "Sentiment analysis", "Entity extraction", "Context awareness"],
    popular: false,
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Seamlessly connect your chatbots with existing systems, CRMs, and business applications.",
    features: ["CRM integration", "API connections", "Database sync", "Webhook support"],
    popular: false,
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security and compliance features to protect your data and customer information.",
    features: ["End-to-end encryption", "GDPR compliance", "SOC 2 certified", "Role-based access"],
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Comprehensive analytics to track performance, optimize conversations, and improve customer satisfaction.",
    features: ["Conversation analytics", "Performance metrics", "Customer insights", "ROI tracking"],
    popular: false,
  },
]

const industries = [
  { name: "E-commerce", icon: Smartphone },
  { name: "Healthcare", icon: Headphones },
  { name: "Financial Services", icon: Shield },
  { name: "Education", icon: Brain },
  { name: "Real Estate", icon: Globe },
  { name: "Technology", icon: Code },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-300 to-black text-black">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gray-800">Services</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Comprehensive AI chatbot solutions designed to transform your customer experience and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative border border-gray-400 bg-white hover:shadow-lg transition-all duration-300">
                {service.popular && (
                  <Badge className="absolute -top-2 left-4 bg-gray-800 text-white">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-gray-800" />
                  </div>
                  <CardTitle className="text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-700">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Check className="h-4 w-4 text-gray-800 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Industries We Serve</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-12">
            Our AI chatbots are trusted by businesses across various industries
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center border border-gray-400 bg-white hover:shadow-md transition-all duration-300 group">
                <CardContent className="p-6">
                  <industry.icon className="h-8 w-8 text-gray-800 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-gray-900">{industry.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-700 mb-12">
            Simple steps to get your AI chatbot up and running
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ "Consultation", "Development", "Deployment" ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gray-800">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step}</h3>
                <p className="text-gray-700">
                  {step === "Consultation" && "We analyze your business needs and design a custom chatbot strategy tailored to your goals."}
                  {step === "Development" && "Our team builds and trains your AI chatbot using advanced machine learning and NLP technologies."}
                  {step === "Deployment" && "We deploy your chatbot across your chosen platforms and provide ongoing support and optimization."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-white via-gray-300 to-black rounded-2xl p-12 text-center text-white shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
              Let's discuss how our AI chatbot services can transform your customer experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-gray-800 hover:text-white">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
