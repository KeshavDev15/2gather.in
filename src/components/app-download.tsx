"use client";

import { motion } from "framer-motion";
import { Smartphone, Download, Star, Users } from "lucide-react";

export function AppDownload() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/3" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="bg-primary/10 p-3 rounded-full">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="gradient-text">Download 2gather</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Get the 2gather app on your mobile device and start connecting with friends and family wherever you go.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - App info and stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Free Download</h3>
                  <p className="text-muted-foreground">Available on iOS and Android</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">4.8/5 Rating</h3>
                  <p className="text-muted-foreground">Based on 10,000+ reviews</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">50,000+ Users</h3>
                  <p className="text-muted-foreground">Join our growing community</p>
                </div>
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn flex items-center justify-center px-6 py-4 rounded-xl group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3 relative z-10">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.a>
              
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="app-store-btn flex items-center justify-center px-6 py-4 rounded-xl group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-3 relative z-10">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Multiple glowing backgrounds for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/15 blur-3xl rounded-full transform scale-110 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-primary/10 blur-2xl rounded-full transform scale-90 animate-pulse delay-1000" />
              
              {/* Phone mockup */}
              <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-[2.5rem] p-2 shadow-2xl phone-mockup-glow">
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-[2rem] p-4 h-[600px] w-[300px] relative overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20"></div>
                  
                  {/* Screen content */}
                  <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-[1.5rem] h-full flex flex-col items-center justify-center text-white relative overflow-hidden">
                    {/* Status bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 text-white text-sm z-10">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App logo/icon */}
                    <div className="mb-8 mt-8">
                      <motion.div 
                        className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 shadow-xl"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Users className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-center text-white">2gather</h3>
                      <p className="text-sm text-white/70 text-center mt-1">Connect & Share</p>
                    </div>
                    
                    {/* Sample app features with animations */}
                    <div className="space-y-3 w-full px-6">
                      <motion.div 
                        className="app-feature-card rounded-xl p-4 flex items-center space-x-3"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Connect with friends instantly</span>
                      </motion.div>
                      <motion.div 
                        className="app-feature-card rounded-xl p-4 flex items-center space-x-3"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                        <span className="text-sm font-medium">Share precious moments</span>
                      </motion.div>
                      <motion.div 
                        className="app-feature-card rounded-xl p-4 flex items-center space-x-3"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-400"></div>
                        <span className="text-sm font-medium">Stay perfectly organized</span>
                      </motion.div>
                    </div>
                    
                    {/* Floating elements with better positioning */}
                    <motion.div 
                      className="absolute top-16 right-6 w-4 h-4 bg-primary/60 rounded-full"
                      animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div 
                      className="absolute bottom-24 left-6 w-3 h-3 bg-primary/40 rounded-full"
                      animate={{ y: [0, -8, 0], opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div 
                      className="absolute top-1/3 left-10 w-2 h-2 bg-white/60 rounded-full"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    
                    {/* Bottom navigation simulation */}
                    <div className="absolute bottom-6 left-6 right-6 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center space-x-6">
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
