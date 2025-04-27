"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Star, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedText } from "@/components/animated-text"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedParticles } from "@/components/animated-particles"
import { TextScramble } from "@/components/text-scramble"
import { MagneticButton } from "@/components/magnetic-button"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuredRef = useRef<HTMLDivElement>(null)
  const howItWorksRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroTextY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const featuredSkills = [
    {
      title: "Web Development",
      description: "Master modern web technologies and build responsive websites",
      price: "₹3,499",
      students: 1243,
      rating: 4.8,
      instructor: "Alex Morgan",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Digital Marketing",
      description: "Learn proven strategies for social media, SEO, and content marketing",
      price: "₹2,999",
      students: 987,
      rating: 4.7,
      instructor: "Sarah Johnson",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Data Science",
      description: "Analyze complex data, build machine learning models, and extract insights",
      price: "₹4,499",
      students: 756,
      rating: 4.9,
      instructor: "Michael Chen",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[90vh] flex items-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]"></div>
            <AnimatedParticles />
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl"
              animate={{
                y: [0, 30, 0],
                x: [0, -20, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
            <motion.div style={{ y: heroTextY, opacity: heroOpacity }} className="max-w-3xl mx-auto space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/10 backdrop-blur-sm"
              >
                <span className="text-sm font-medium">Premium Skill Sharing Platform</span>
              </motion.div>

              <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <TextScramble
                  text="Share Your Skills, Earn While You Teach"
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent"
                />
              </div>

              <AnimatedText
                text="Join our community of learners and teachers. Share what you know, learn what you don't, and earn money along the way."
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
                delay={0.2}
              />

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <MagneticButton>
                  <Button asChild size="lg" className="group relative overflow-hidden btn-hover-effect">
                    <Link href="/signup" className="flex items-center">
                      Get Started
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          repeatDelay: 1,
                        }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </MagneticButton>

                <Button asChild variant="outline" size="lg" className="group">
                  <Link href="/explore" className="flex items-center">
                    Explore Skills
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                        repeatDelay: 1.5,
                      }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center justify-center space-x-4 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-background overflow-hidden"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        alt="User"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                  <span className="font-medium">10,000+</span> people already joined
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-5 w-5 text-primary" />
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Skills Section */}
        <section ref={featuredRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Featured Skills</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover the most popular skills our community is sharing and learning
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: 30 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
                >
                  <AnimatedCard
                    className="border rounded-lg overflow-hidden h-full flex flex-col"
                    glowColor="rgba(230, 43, 30, 0.2)"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image src={skill.image || "/placeholder.svg"} alt={skill.title} fill className="object-cover" />
                      <motion.div
                        className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        {skill.price}
                      </motion.div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="font-bold text-xl mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground mb-4">{skill.description}</p>

                      <div className="flex items-center mt-auto mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-accent fill-accent mr-1" />
                          <span>{skill.rating}</span>
                        </div>
                        <span className="mx-2">•</span>
                        <span className="text-sm text-muted-foreground">{skill.students} students</span>
                      </div>

                      <Button asChild className="w-full group">
                        <Link href={`/skills/${skill.title.toLowerCase().replace(/\s+/g, "-")}`}>
                          View Skill
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              repeatType: "loop",
                              repeatDelay: 2,
                            }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild variant="outline" className="group">
                <Link href="/explore">
                  View All Skills
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 2.5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section ref={howItWorksRef} className="py-20 bg-secondary relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our platform makes it easy to share your skills and earn money
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting line */}
              <motion.div
                className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 hidden md:block"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {[
                {
                  title: "1. Share Your Skills",
                  description: "Create courses and tutorials about skills you've mastered",
                },
                {
                  title: "2. Connect With Learners",
                  description: "Engage with students who want to learn from your expertise",
                },
                {
                  title: "3. Earn Money",
                  description: "Get paid for every student who enrolls in your courses",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center relative z-10"
                >
                  <motion.div
                    className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button asChild className="group">
                <Link href="/teach">
                  Start Teaching
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", repeatDelay: 2 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2 shimmer">10K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 shimmer">₹1850M+</div>
                <div className="text-muted-foreground">Earnings Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 shimmer">500K+</div>
                <div className="text-muted-foreground">Skills Taught</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80"></div>

              {/* Animated background elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full mix-blend-overlay filter blur-3xl"
                animate={{
                  x: [0, 30, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full mix-blend-overlay filter blur-3xl"
                animate={{
                  x: [0, -20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />

              <div className="relative p-8 md:p-12 text-center">
                <motion.h2
                  className="text-2xl md:text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to share your skills and earn?
                </motion.h2>
                <motion.p
                  className="text-white/90 mb-6 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Join our community today and start your journey as a learner or teacher.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button asChild size="lg" variant="secondary" className="group">
                    <Link href="/signup">
                      Sign Up Now
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          repeatDelay: 1,
                        }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
