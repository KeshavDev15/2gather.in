"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Moon, Sun, Menu, Search } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navigationVariants, } from "@/lib/animations";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={navigationVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-xl font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
              >
                2gather.in
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:block"
          >
            <NavigationMenu>
              <motion.ul className="flex space-x-8">
                {["Events", "How It Works", "Features", "Pricing"].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Link href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}>
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </NavigationMenu>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <AnimatePresence mode="wait">
              {isSearchOpen ? (
                <motion.div 
                  initial={{ width: 0, opacity: 0 }} 
                  animate={{ width: "200px", opacity: 1 }} 
                  exit={{ width: 0, opacity: 0 }}
                  className="relative hidden md:block"
                >
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full py-1.5 px-3 rounded-full bg-muted text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute right-1 top-1/2 -translate-y-1/2"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }}
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hidden md:flex" 
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.05, rotate: 15 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-full hover:bg-muted transition-colors"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </motion.button>

            <div className="hidden md:flex space-x-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost">Sign In</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="relative overflow-hidden group">
                  <span className="relative z-10">Get Started</span>
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-8">
                      <span className="text-xl font-bold text-primary">2gather.in</span>
                    </div>
                    <nav className="flex flex-col space-y-6 mt-4">
                      {["Events", "How It Works", "Features", "Pricing"].map((item) => (
                        <motion.div 
                          key={item}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Link
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {item}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                    <div className="mt-auto space-y-4 py-4">
                      <Button className="w-full" variant="outline">
                        Sign In
                      </Button>
                      <Button className="w-full">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
