"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
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
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.footer
      className="bg-background border-t"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="mb-6 md:mb-0" variants={item}>
            <Link href="/" className="font-bold text-xl group">
              <span>Skill</span>
              <span className="text-primary">Swap</span>
              <span className="block h-0.5 w-0 group-hover:w-full bg-primary transition-all duration-300"></span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Share your skills, learn from others, and earn money in the process.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12" variants={container}>
            <motion.div variants={item}>
              <h3 className="font-medium mb-3">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/explore"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    Explore Skills
                  </Link>
                </li>
                <li>
                  <Link
                    href="/teach"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    Become a Teacher
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="font-medium mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    Legal
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SkillSwap. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Privacy
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
