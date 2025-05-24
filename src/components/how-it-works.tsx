"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  Search, 
  Calendar, 
  Users 
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up and tell us about your interests. We'll help you find the perfect communities and events.",
      badge: "Quick Setup"
    },
    {
      step: "02",
      icon: Search,
      title: "Discover Events",
      description: "Browse events in your area or search by interests. Filter by date, location, and event type.",
      badge: "Smart Matching"
    },
    {
      step: "03",
      icon: Calendar,
      title: "Join or Organize",
      description: "RSVP to events you love or create your own. Invite friends and build your community.",
      badge: "Flexible Options"
    },
    {
      step: "04",
      icon: Users,
      title: "Connect & Grow",
      description: "Meet new people, share experiences, and build lasting relationships within your community.",
      badge: "Real Connections"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-muted/30">
      <motion.div 
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div 
          variants={fadeInUp}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mx-auto">
            How 2gather Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto text-center">
            Getting started is simple. Follow these easy steps to join the community.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2 place-items-center md:place-items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 w-full max-w-md md:max-w-none mx-auto">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                <CardHeader className="pb-4 text-center md:text-left">
                  <div className="flex items-center justify-between">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg mx-auto md:mx-0"
                    >
                      {step.step}
                    </motion.div>
                    <Badge variant="secondary" className="ml-auto">{step.badge}</Badge>
                  </div>
                  <div className="flex items-center space-x-3 mt-4 justify-center md:justify-start">
                    <step.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl text-center md:text-left">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center md:text-left">
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
                
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute -right-4 top-1/2 w-8 h-0.5 bg-border transform -translate-y-1/2 origin-left"
                  />
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
