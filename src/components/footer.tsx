"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Twitter, 
  Github, 
  Linkedin, 
  Mail,
  Globe,
  ChevronRight,
  Send 
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const footerLinks = {
  "Product": [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" }
  ],
  "Resources": [
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Tutorials", href: "#" }
  ],
  "Company": [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ]
};

const staggerChildVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1, 
    y: 0,
    transition: {
      delay: index * 0.05
    }
  })
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoverStates, setHoverStates] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const handleHover = (linkName: string, isHovering: boolean) => {
    setHoverStates(prev => ({ ...prev, [linkName]: isHovering }));
  };

  return (
    <footer className="border-t bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-1 lg:col-span-2"
            >
              <div className="flex items-center mb-6">
                <Users className="h-6 w-6 text-primary mr-2" />
                <span className="font-bold text-xl text-primary">2gather.in</span>
              </div>
              
              <p className="text-muted-foreground mb-6 max-w-md">
                2gather.in brings people together through meaningful events and communities.
                Create, discover, and connect with like-minded individuals.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-sm font-medium">Subscribe to our newsletter</h4>
                <form onSubmit={handleSubmit} className="flex max-w-sm">
                  {!isSubmitted ? (
                    <>
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-grow bg-background rounded-l-md border border-r-0 border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <Button type="submit" className="rounded-l-none">
                        <Send className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-4 py-2 rounded-md text-sm flex items-center w-full"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      Thanks for subscribing!
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
            
            {Object.entries(footerLinks).map(([category, links], catIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <motion.li 
                      key={link.name}
                      custom={linkIndex}
                      variants={staggerChildVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      onHoverStart={() => handleHover(link.name, true)}
                      onHoverEnd={() => handleHover(link.name, false)}
                    >
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                      >
                        <motion.span
                          animate={{
                            x: hoverStates[link.name] ? 5 : 0,
                            color: hoverStates[link.name] ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))"
                          }}
                        >
                          {link.name}
                        </motion.span>
                        {hoverStates[link.name] && (
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </motion.span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 border-t pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground order-2 md:order-1">
                © {new Date().getFullYear()} 2gather.in. All rights reserved.
              </div>
              
              <div className="flex items-center gap-3 order-1 md:order-2">
                {[
                  { icon: Twitter, label: "Twitter" },
                  { icon: Github, label: "GitHub" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Mail, label: "Email" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                  >
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                      <item.icon className="h-4 w-4" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
