"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, ChevronDown, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card3D } from "@/components/3d-card"

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100])

  const categories = ["Web Development", "Data Science", "Design", "Marketing", "Business", "Photography"]

  const skills = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "John Smith",
      price: 49.99,
      rating: 4.8,
      students: 1243,
      duration: "12 hours",
      image: "/placeholder.svg?height=200&width=300",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      instructor: "Sarah Johnson",
      price: 39.99,
      rating: 4.6,
      students: 987,
      duration: "10 hours",
      image: "/placeholder.svg?height=200&width=300",
      category: "Marketing",
    },
    {
      id: 3,
      title: "Data Science with Python",
      instructor: "Michael Chen",
      price: 59.99,
      rating: 4.9,
      students: 756,
      duration: "15 hours",
      image: "/placeholder.svg?height=200&width=300",
      category: "Data Science",
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      instructor: "Emma Wilson",
      price: 44.99,
      rating: 4.7,
      students: 632,
      duration: "8 hours",
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
    },
    {
      id: 5,
      title: "Photography for Beginners",
      instructor: "David Brown",
      price: 29.99,
      rating: 4.5,
      students: 421,
      duration: "6 hours",
      image: "/placeholder.svg?height=200&width=300",
      category: "Photography",
    },
    {
      id: 6,
      title: "Business Strategy Fundamentals",
      instructor: "Lisa Anderson",
      price: 54.99,
      rating: 4.8,
      students: 543,
      duration: "14 hours",
      image: "/placeholder.svg?height=200&width=300",
      category: "Business",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        <motion.div
          className="bg-primary py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h1
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Explore Skills
              </motion.h1>
              <motion.p
                className="text-white/80 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Discover thousands of skills taught by expert instructors
              </motion.p>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for skills..."
                  className="w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              className="md:w-1/4 lg:w-1/5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="md:hidden mb-4">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between pulse"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                >
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
                </Button>
              </div>

              <AnimatePresence>
                <motion.div
                  className={`space-y-6 ${filtersOpen ? "block" : "hidden md:block"}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Checkbox id={`category-${index}`} />
                          <Label htmlFor={`category-${index}`} className="text-sm font-normal cursor-pointer">
                            {category}
                          </Label>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Price Range</h3>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="py-4"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm">${priceRange[0]}</span>
                        <span className="text-sm">${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-3">Rating</h3>
                    <div className="space-y-2">
                      {[4, 3, 2, 1].map((rating) => (
                        <motion.div
                          key={rating}
                          className="flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (4 - rating) * 0.05 + 0.2 }}
                        >
                          <Checkbox id={`rating-${rating}`} />
                          <Label
                            htmlFor={`rating-${rating}`}
                            className="text-sm font-normal cursor-pointer flex items-center"
                          >
                            <div className="flex items-center">
                              {Array(rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                                ))}
                              {Array(5 - rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                ))}
                            </div>
                            <span className="ml-1">& up</span>
                          </Label>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Button className="w-full">Apply Filters</Button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="md:w-3/4 lg:w-4/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item}>
                  <h2 className="text-2xl font-bold">All Skills</h2>
                  <p className="text-muted-foreground">Showing {skills.length} results</p>
                </motion.div>
                <motion.div className="mt-2 sm:mt-0" variants={item}>
                  <select className="p-2 border rounded-md text-sm">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {skills.map((skill, index) => (
                  <motion.div key={skill.id} variants={item}>
                    <Card3D className="border rounded-lg overflow-hidden h-full">
                      <div className="relative h-40 w-full">
                        <Image
                          src={skill.image || "/placeholder.svg"}
                          alt={skill.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                          ₹{skill.price}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-xs text-primary font-medium mb-1">{skill.category}</div>
                        <h3 className="text-lg font-bold mb-1">{skill.title}</h3>
                        <div className="text-sm text-muted-foreground mb-2">by {skill.instructor}</div>
                        <div className="flex items-center text-sm mb-4">
                          <div className="flex items-center mr-2">
                            <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                            <span>{skill.rating}</span>
                          </div>
                          <span className="mx-1">•</span>
                          <span>{skill.students} students</span>
                          <span className="mx-1">•</span>
                          <span>{skill.duration}</span>
                        </div>
                        <Button asChild className="w-full group">
                          <Link href={`/skills/${skill.id}`}>
                            View Skill
                            <motion.span
                              className="ml-2 inline-block"
                              animate={{ x: [0, 3, 0] }}
                              transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "loop",
                                repeatDelay: 1 + index * 0.2,
                              }}
                            >
                              →
                            </motion.span>
                          </Link>
                        </Button>
                      </div>
                    </Card3D>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button variant="outline" className="mx-1 px-4">
                  1
                </Button>
                <Button variant="outline" className="mx-1 px-4">
                  2
                </Button>
                <Button variant="outline" className="mx-1 px-4">
                  3
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
