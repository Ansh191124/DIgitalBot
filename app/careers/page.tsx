"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Trophy,
  ArrowRight,
} from "lucide-react";

const openPositions = [
  {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Lead the development of our next-generation conversational AI platform.",
    requirements: ["5+ years in AI/ML", "Python expertise", "NLP experience"],
  },
  {
    title: "Product Manager - AI",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description:
      "Drive product strategy for our AI chatbot platform and customer experience.",
    requirements: [
      "3+ years product management",
      "AI/ML background",
      "Customer-focused",
    ],
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Help our enterprise customers maximize value from our AI chatbot solutions.",
    requirements: [
      "Customer success experience",
      "Technical aptitude",
      "Communication skills",
    ],
  },
  {
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build beautiful, responsive interfaces for our chatbot management platform.",
    requirements: ["React/Next.js expertise", "TypeScript", "UI/UX sensibility"],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance plus wellness programs.",
  },
  {
    icon: Zap,
    title: "Growth & Learning",
    description:
      "Annual learning budget, conference attendance, and skill development opportunities.",
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description: "Flexible hours, remote culture, and unlimited paid time off.",
  },
  {
    icon: Trophy,
    title: "Equity & Rewards",
    description:
      "Competitive pay, equity options, and performance-based bonuses.",
  },
];

export default function Careers() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100 via-white to-sky-50 opacity-70"></div>
        <div className="relative z-10 container mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-500 to-indigo-600">
            Join Our Visionary Team
          </h1>
          <p className="text-xl text-sky-800/80 mb-8 max-w-3xl mx-auto">
            Be part of the revolution in AI-driven communication. Build, innovate,
            and grow with DigitalBot.ai.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500 text-white hover:from-sky-600 hover:to-indigo-600 shadow-lg rounded-full transition-all duration-300"
          >
            View Open Positions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Culture / Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-100 via-white to-sky-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sky-700 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in empowering talent and building products that truly make
              a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 rounded-2xl"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-sky-600" />
                  </div>
                  <CardTitle className="text-lg text-sky-700 font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sky-700 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore roles that fit your passion and expertise.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card
                key={index}
                className="border-0 bg-gradient-to-br from-white via-sky-50 to-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-sky-800 font-bold mb-2">
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <Badge className="bg-sky-100 text-sky-700 font-medium">
                          {position.department}
                        </Badge>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-sky-500" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-sky-500" />
                          {position.type}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-full">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-sky-700 mb-2">
                      Key Requirements:
                    </h4>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center">
                          <ArrowRight className="h-3 w-3 mr-2 text-sky-500 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-sky-100 via-white to-sky-200 text-center">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-sky-50 via-white to-sky-100 rounded-3xl p-12 shadow-xl">
            <h2 className="text-3xl font-extrabold text-sky-700 mb-4">
              Don’t See the Right Role?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We’re always looking for passionate, curious minds. Share your
              resume, and we’ll reach out when the right opportunity comes along.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 via-blue-400 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-semibold rounded-full shadow-lg"
            >
              Send Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
