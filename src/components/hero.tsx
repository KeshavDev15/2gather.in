"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60"
          >
            Bring People Together,
            <br />
            Create Lasting Connections
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Transform your ideas into vibrant gatherings. Whether it&apos;s a workshop,
            meetup, or social event, make it happen with 2gather.in.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="group">
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline">
                <Globe className="mr-2 h-4 w-4" />
                Explore Events
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 grid grid-cols-1 gap-y-8 sm:grid-cols-3 sm:gap-x-8"
          >
            {[
              ["1M+", "Active Users"],
              ["50K+", "Events Created"],
              ["100+", "Countries"],
            ].map(([stat, label]) => (
              <motion.div
                key={label}
                whileHover={{ scale: 1.05 }}
                className="mx-auto flex max-w-xs flex-col gap-y-2"
              >
                <motion.dt
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                  }}
                  className="text-3xl font-bold tracking-tight"
                >
                  {stat}
                </motion.dt>
                <motion.dd className="text-sm text-muted-foreground">
                  {label}
                </motion.dd>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-16 relative mx-auto w-full max-w-4xl"
        >
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
            <Image
              src="/hero-image.jpg"
              alt="2gather.in platform preview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Floating elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-primary/10 backdrop-blur-lg ring-1 ring-primary/20"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -left-4 bottom-4 h-12 w-12 rounded-full bg-primary/10 backdrop-blur-lg ring-1 ring-primary/20"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
