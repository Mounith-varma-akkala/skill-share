"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, Clock, Users, CheckCircle, Play } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SkillDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data for the skill
  const skill = {
    id: params.id,
    title: "Web Development Fundamentals",
    description:
      "Learn the core concepts of web development including HTML, CSS, and JavaScript. This comprehensive course will take you from beginner to building your own responsive websites.",
    instructor: "John Smith",
    instructorTitle: "Senior Web Developer",
    instructorImage: "/placeholder.svg?height=100&width=100",
    price: 49.99,
    rating: 4.8,
    reviews: 324,
    students: 1243,
    duration: "12 hours",
    lastUpdated: "March 2023",
    image: "/placeholder.svg?height=400&width=600",
    level: "Beginner",
    includes: [
      "12 hours on-demand video",
      "5 downloadable resources",
      "Full lifetime access",
      "Access on mobile and TV",
      "Certificate of completion",
    ],
    sections: [
      {
        title: "Introduction to Web Development",
        lessons: [
          { title: "Course Overview", duration: "5:20" },
          { title: "Setting Up Your Development Environment", duration: "10:15" },
          { title: "Understanding the Web", duration: "8:45" },
        ],
      },
      {
        title: "HTML Fundamentals",
        lessons: [
          { title: "HTML Document Structure", duration: "12:30" },
          { title: "Working with Text Elements", duration: "15:45" },
          { title: "Links and Navigation", duration: "9:20" },
          { title: "Images and Media", duration: "11:10" },
        ],
      },
      {
        title: "CSS Styling",
        lessons: [
          { title: "CSS Basics", duration: "14:20" },
          { title: "Box Model and Layout", duration: "16:35" },
          { title: "Responsive Design", duration: "18:40" },
        ],
      },
      {
        title: "JavaScript Essentials",
        lessons: [
          { title: "JavaScript Syntax", duration: "13:25" },
          { title: "DOM Manipulation", duration: "17:50" },
          { title: "Event Handling", duration: "12:15" },
        ],
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl font-bold mb-4">{skill.title}</h1>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex items-center text-sm mb-4">
                  <div className="flex items-center mr-3">
                    <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                    <span>{skill.rating}</span>
                    <span className="text-muted-foreground ml-1">({skill.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center mr-3">
                    <Users className="h-4 w-4 text-muted-foreground mr-1" />
                    <span>{skill.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span>{skill.duration}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-sm">Created by </span>
                  <Link href="#" className="text-sm text-primary hover:underline">
                    {skill.instructor}
                  </Link>
                </div>
                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">Last updated: {skill.lastUpdated}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="#">Enroll Now - ₹{skill.price}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                    <Link href="#">Preview Course</Link>
                  </Button>
                </div>
              </div>
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={skill.image || "/placeholder.svg"} alt={skill.title} fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Tabs defaultValue="overview" className="mb-8" onValueChange={setActiveTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {[
                          "Build responsive websites using HTML, CSS, and JavaScript",
                          "Understand core web development concepts",
                          "Create interactive user interfaces",
                          "Deploy websites to the internet",
                          "Optimize websites for performance",
                          "Debug common web development issues",
                        ].map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-4">Course Description</h2>
                      <div className="space-y-4">
                        <p>
                          This comprehensive course is designed to take you from a complete beginner to a confident web
                          developer. You'll learn all the essential skills needed to build modern, responsive websites
                          from scratch.
                        </p>
                        <p>
                          Starting with the fundamentals of HTML, we'll progress through CSS styling and layout
                          techniques, before diving into JavaScript to add interactivity to your websites. By the end of
                          the course, you'll have built several real-world projects that you can add to your portfolio.
                        </p>
                        <p>
                          Whether you're looking to start a career in web development, create websites for your own
                          projects, or simply understand how the web works, this course provides all the knowledge and
                          practical skills you need.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-4">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>No prior coding experience required - we'll start from the basics</li>
                        <li>A computer with internet access (Windows, Mac, or Linux)</li>
                        <li>A text editor (we'll help you set this up)</li>
                        <li>A desire to learn and build things!</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Course Content</h2>
                      <div className="text-sm text-muted-foreground mb-6">
                        {skill.sections.reduce((total, section) => total + section.lessons.length, 0)} lessons •{" "}
                        {skill.duration} total length
                      </div>

                      <div className="space-y-4">
                        {skill.sections.map((section, sectionIndex) => (
                          <motion.div
                            key={sectionIndex}
                            className="border rounded-lg overflow-hidden"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                          >
                            <div className="bg-secondary p-4">
                              <h3 className="font-medium">{section.title}</h3>
                              <div className="text-sm text-muted-foreground">{section.lessons.length} lessons</div>
                            </div>
                            <div className="divide-y">
                              {section.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="p-4 flex justify-between items-center">
                                  <div className="flex items-center">
                                    <Play className="h-4 w-4 mr-2 text-primary" />
                                    <span>{lesson.title}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold mb-4">Student Reviews</h2>
                      <div className="flex items-center mb-6">
                        <div className="text-4xl font-bold mr-4">{skill.rating}</div>
                        <div>
                          <div className="flex">
                            {Array(5)
                              .fill(0)
                              .map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${i < Math.floor(skill.rating) ? "text-accent fill-accent" : "text-muted-foreground"}`}
                                />
                              ))}
                          </div>
                          <div className="text-sm text-muted-foreground">Course Rating • {skill.reviews} Reviews</div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            name: "Alex Johnson",
                            rating: 5,
                            date: "2 months ago",
                            comment:
                              "This course exceeded my expectations! The instructor explains complex concepts in a way that's easy to understand. I went from knowing nothing about web development to building my own portfolio website.",
                          },
                          {
                            name: "Maria Garcia",
                            rating: 4,
                            date: "3 months ago",
                            comment:
                              "Great course with lots of practical examples. I would have liked more advanced JavaScript topics, but overall it was very helpful for beginners.",
                          },
                          {
                            name: "David Kim",
                            rating: 5,
                            date: "1 month ago",
                            comment:
                              "The projects in this course are excellent and really help reinforce the concepts. The instructor is responsive to questions and provides helpful feedback.",
                          },
                        ].map((review, index) => (
                          <div key={index} className="border rounded-lg p-4">
                            <div className="flex justify-between mb-2">
                              <div className="font-medium">{review.name}</div>
                              <div className="text-sm text-muted-foreground">{review.date}</div>
                            </div>
                            <div className="flex mb-2">
                              {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < review.rating ? "text-accent fill-accent" : "text-muted-foreground"}`}
                                  />
                                ))}
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="border rounded-lg overflow-hidden sticky top-20">
                <div className="p-5">
                  <h3 className="font-bold text-xl mb-4">This course includes:</h3>
                  <ul className="space-y-3">
                    {skill.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button asChild className="w-full">
                      <Link href="#">
                        Enroll Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-4 text-center text-sm">
                    <span className="text-muted-foreground">30-Day Money-Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
