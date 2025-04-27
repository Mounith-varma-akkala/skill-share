"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Clock, DollarSign, Layers, BarChart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("learning")

  const enrolledCourses = [
    {
      title: "Web Development Fundamentals",
      instructor: "John Smith",
      progress: 65,
      image: "/placeholder.svg?height=100&width=200",
      lastAccessed: "2 days ago",
    },
    {
      title: "Digital Marketing Masterclass",
      instructor: "Sarah Johnson",
      progress: 32,
      image: "/placeholder.svg?height=100&width=200",
      lastAccessed: "1 week ago",
    },
    {
      title: "Introduction to Data Science",
      instructor: "Michael Chen",
      progress: 12,
      image: "/placeholder.svg?height=100&width=200",
      lastAccessed: "3 days ago",
    },
  ]

  const teachingCourses = [
    {
      title: "Advanced JavaScript Patterns",
      students: 156,
      earnings: "$1,245",
      image: "/placeholder.svg?height=100&width=200",
      rating: 4.8,
    },
    {
      title: "UI/UX Design Principles",
      students: 89,
      earnings: "$720",
      image: "/placeholder.svg?height=100&width=200",
      rating: 4.6,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back, Alex! Here's what's happening with your learning journey.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button asChild>
                <Link href="/explore">
                  Explore Skills
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card className="animate-card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
                <Layers className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last month</p>
              </CardContent>
            </Card>

            <Card className="animate-card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Teaching Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Same as last month</p>
              </CardContent>
            </Card>

            <Card className="animate-card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹1,45,965</div>
                <p className="text-xs text-muted-foreground">+₹18,245 from last month</p>
              </CardContent>
            </Card>

            <Card className="animate-card-hover">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5</div>
                <p className="text-xs text-muted-foreground">+3.5 from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="learning" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="learning">My Learning</TabsTrigger>
              <TabsTrigger value="teaching">My Teaching</TabsTrigger>
            </TabsList>

            <TabsContent value="learning">
              <Card>
                <CardHeader>
                  <CardTitle>Enrolled Courses</CardTitle>
                  <CardDescription>Continue where you left off</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {enrolledCourses.map((course, index) => (
                      <div key={index} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="relative w-full sm:w-24 h-16 overflow-hidden rounded-md">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="font-medium">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <p className="text-xs text-muted-foreground">Last accessed: {course.lastAccessed}</p>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>Continue</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/my-courses">
                      View All Courses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="teaching">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Your Courses</CardTitle>
                      <CardDescription>Courses you're currently teaching</CardDescription>
                    </div>
                    <Button asChild>
                      <Link href="/create-course">Create Course</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {teachingCourses.map((course, index) => (
                      <div key={index} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="relative w-full sm:w-24 h-16 overflow-hidden rounded-md">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-1">
                          <h3 className="font-medium">{course.title}</h3>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                            <span>{course.students} students</span>
                            <span>₹{course.earnings.replace("$", "")} earned</span>
                            <span>{course.rating} rating</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button asChild variant="outline" size="sm">
                            <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}/edit`}>Edit</Link>
                          </Button>
                          <Button asChild size="sm">
                            <Link href={`/courses/${course.title.toLowerCase().replace(/\s+/g, "-")}/analytics`}>
                              Analytics
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full">
                    <Link href="/my-teaching">
                      View All Teaching
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                  <CardDescription>Your earnings from the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center">
                    <div className="flex items-center justify-center w-full h-full bg-muted/30 rounded-md">
                      <BarChart className="h-8 w-8 text-muted-foreground" />
                      <span className="ml-2 text-muted-foreground">Earnings chart will appear here</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/earnings">View Detailed Earnings</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
