"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, Calendar, Heart, Apple, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const scaleOnHover = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05 },
  transition: { type: "spring", stiffness: 300 }
};

const statsAnimation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring", stiffness: 100, delay: 0.2 }
};

export function CTA() {
  return (
    <section className="py-10 sm:py-32 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <Card className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary/80 shadow-2xl">
          <motion.div
            className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <CardContent className="p-12 text-center text-primary-foreground relative z-10">
            <div className="mx-auto max-w-2xl">
              <motion.h2 
                {...fadeInUp}
                className="text-3xl font-bold tracking-tight sm:text-4xl mb-4"
              >
                Ready to bring people 2gather?
              </motion.h2>
              <motion.p 
                {...fadeInUp}
                transition={{ delay: 0.1 }}
                className="text-lg mb-8 opacity-90"
              >
                Join thousands of event organizers who are already building amazing communities. 
                Start your first meetup today and see the magic happen.
              </motion.p>
              
              <motion.div 
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <motion.div {...scaleOnHover}>
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto group relative overflow-hidden bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  >
                    <span className="relative z-10">Start Your First Meetup</span>
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div {...scaleOnHover}>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary backdrop-blur-sm"
                  >
                    Explore Events Near You
                  </Button>
                </motion.div>
              </motion.div>

              {/* App Download Section */}
              <motion.div
                variants={fadeInUp}
                className="mt-12 pt-12 border-t border-primary-foreground/20"
              >
                <h3 className="text-xl font-semibold mb-4">Get the 2gather App</h3>
                <p className="text-sm mb-6 opacity-80">
                  Download our mobile app to discover and join events on the go
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div {...scaleOnHover}>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full sm:w-auto border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Apple className="mr-2 h-5 w-5" />
                      Download for iOS
                    </Button>
                  </motion.div>
                  <motion.div {...scaleOnHover}>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full sm:w-auto border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <PlayCircle className="mr-2 h-5 w-5" />
                      Get it on Android
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-16">
                <motion.div 
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  {...statsAnimation}
                  transition={{ delay: 0.3 }}
                >
                  <Users className="h-8 w-8 opacity-80" />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold"
                  >
                    10K+
                  </motion.div>
                  <div className="text-sm opacity-80">Active Organizers</div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  {...statsAnimation}
                  transition={{ delay: 0.4 }}
                >
                  <Calendar className="h-8 w-8 opacity-80" />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-2xl font-bold"
                  >
                    50K+
                  </motion.div>
                  <div className="text-sm opacity-80">Events Created</div>
                </motion.div>
                <motion.div 
                  className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/5 transition-colors"
                  {...statsAnimation}
                  transition={{ delay: 0.5 }}
                >
                  <Heart className="h-8 w-8 opacity-80" />
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-2xl font-bold"
                  >
                    2M+
                  </motion.div>
                  <div className="text-sm opacity-80">Connections Made</div>
                </motion.div>
              </div>
            </div>
            
            {/* Animated background decorations */}
            <motion.div 
              className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-white/10"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-white/10"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.15, 0.1] 
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}