"use client"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, DollarSign, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function TeachPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Share Your Knowledge, Earn Money</h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of instructors teaching millions of students on SkillSwap
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/signup?as=teacher">
                Start Teaching Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2 text-primary">10K+</div>
                <p className="text-muted-foreground">Active Instructors</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-primary">₹1850M+</div>
                <p className="text-muted-foreground">Instructor Earnings</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-primary">500K+</div>
                <p className="text-muted-foreground">Students Learning</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How to Become an Instructor</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow these simple steps to start sharing your skills and earning money
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Plan Your Course",
                  description: "Choose a topic you're knowledgeable about and plan your curriculum",
                },
                {
                  title: "Record Your Videos",
                  description: "Use our guidelines to create engaging video content for your students",
                },
                {
                  title: "Launch Your Course",
                  description: "Upload your course materials and set your price",
                },
                {
                  title: "Earn Money",
                  description: "Get paid every time a student enrolls in your course",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                >
                  <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Teach on SkillSwap?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join our platform and enjoy these benefits as an instructor
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <DollarSign className="h-10 w-10 text-primary" />,
                  title: "Earn Money",
                  description: "Receive 70% of the revenue when students purchase your courses",
                },
                {
                  icon: <Users className="h-10 w-10 text-primary" />,
                  title: "Reach Millions",
                  description: "Connect with our global community of eager learners",
                },
                {
                  icon: <Award className="h-10 w-10 text-primary" />,
                  title: "Expert Support",
                  description: "Get help with course creation, marketing, and technical issues",
                },
              ].map((benefit, index) => (
                <div key={index} className="border rounded-lg p-6 text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Instructor Success Stories</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from instructors who have transformed their skills into income
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Web Development Instructor",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "Teaching on SkillSwap has allowed me to reach students worldwide and earn a full-time income doing what I love. The platform makes it easy to create and manage courses.",
                },
                {
                  name: "Michael Chen",
                  role: "Data Science Instructor",
                  image: "/placeholder.svg?height=100&width=100",
                  quote:
                    "I've been able to share my expertise with thousands of students and build a personal brand in my field. The support from the SkillSwap team has been invaluable.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Start Teaching?</h2>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Join our community of instructors and start sharing your knowledge today.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/signup?as=teacher">
                  Create Your Course
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
