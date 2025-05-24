"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
	{
		name: "Sarah Chen",
		role: "Tech Meetup Organizer",
		content:
			"2gather has completely transformed how I organize my tech meetups. The platform is intuitive, and the community features help foster real connections.",
		rating: 5,
	},
	{
		name: "Marcus Rodriguez",
		role: "Photography Group Leader",
		content:
			"I've tried many platforms, but 2gather stands out. The location discovery feature helped me find perfect venues, and attendance has doubled!",
		rating: 5,
	},
	{
		name: "Emily Watson",
		role: "Book Club Founder",
		content:
			"The chat features and event management tools are fantastic. My book club members love how easy it is to stay connected between meetings.",
		rating: 5,
	},
	{
		name: "David Kim",
		role: "Startup Community Host",
		content:
			"2gather's analytics help me understand what works best for my events. The platform has helped me build a thriving startup community of 500+ members.",
		rating: 5,
	},
	{
		name: "Lisa Thompson",
		role: "Fitness Group Organizer",
		content:
			"The notification system ensures everyone stays informed. My outdoor fitness group has grown from 10 to 200 members thanks to 2gather's discovery features.",
		rating: 5,
	},
	{
		name: "James Wilson",
		role: "Art Workshop Coordinator",
		content:
			"Creating and managing art workshops has never been easier. The platform's design is beautiful and matches the creative energy of our community.",
		rating: 5,
	},
];

export function Testimonials() {
	const [currentPage, setCurrentPage] = useState(0);
	const [autoplay, setAutoplay] = useState(true);
	const testimonialsPerPage = 3;
	const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

	// Autoplay functionality
	useEffect(() => {
		if (!autoplay) return;

		const interval = setInterval(() => {
			setCurrentPage((prev) => (prev + 1) % totalPages);
		}, 5000);

		return () => clearInterval(interval);
	}, [autoplay, totalPages]);

	// Pause autoplay on hover
	const handleMouseEnter = () => setAutoplay(false);
	const handleMouseLeave = () => setAutoplay(true);

	const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
	const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

	// Get current testimonials
	const currentTestimonials = testimonials.slice(
		currentPage * testimonialsPerPage,
		(currentPage + 1) * testimonialsPerPage
	);

	return (
		<section
			className="py-24 sm:py-32 bg-muted/50 overflow-hidden"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mx-auto max-w-2xl text-center mb-16"
				>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Loved by Event Organizers
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Here&apos;s what our community has to say about their experience with
						2gather.
					</p>
				</motion.div>

				{/* Desktop view - grid */}
				<div className="hidden lg:block">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentPage}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className="grid grid-cols-3 gap-8"
						>
							{currentTestimonials.map((testimonial, index) => (
								<TestimonialCard
									key={`${currentPage}-${index}`}
									testimonial={testimonial}
									index={index}
								/>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Tablet view */}
				<div className="hidden sm:block lg:hidden">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentPage}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className="grid grid-cols-2 gap-8"
						>
							{currentTestimonials.slice(0, 2).map((testimonial, index) => (
								<TestimonialCard
									key={`${currentPage}-${index}`}
									testimonial={testimonial}
									index={index}
								/>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Mobile view */}
				<div className="sm:hidden">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentPage}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
						>
							<TestimonialCard
								testimonial={currentTestimonials[0]}
								index={0}
							/>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Navigation */}
				<div className="flex justify-center items-center mt-12 space-x-4">
					<Button
						variant="outline"
						size="icon"
						onClick={prevPage}
						className="rounded-full"
					>
						<ChevronLeft className="h-5 w-5" />
					</Button>

					<div className="flex space-x-2">
						{Array.from({ length: totalPages }).map((_, i) => (
							<motion.button
								key={i}
								onClick={() => setCurrentPage(i)}
								className={`w-2 h-2 rounded-full ${
									currentPage === i ? "bg-primary" : "bg-primary/30"
								}`}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 0.8 }}
								animate={currentPage === i ? { scale: [1, 1.2, 1] } : {}}
								transition={
									currentPage === i ? { repeat: Infinity, duration: 2 } : {}
								}
							/>
						))}
					</div>

					<Button
						variant="outline"
						size="icon"
						onClick={nextPage}
						className="rounded-full"
					>
						<ChevronRight className="h-5 w-5" />
					</Button>
				</div>
			</motion.div>
		</section>
	);
}

interface TestimonialCardProps {
	testimonial: typeof testimonials[0];
	index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			whileHover={{ y: -5, transition: { duration: 0.2 } }}
		>
			<Card className="bg-background h-full group hover:shadow-lg transition-all duration-300 w-full max-w-sm lg:max-w-none mx-auto">
				<CardContent className="p-6 h-full flex flex-col">
					<div className="flex items-center space-x-4 mb-4">
						<Avatar>
							<AvatarFallback className="bg-primary/10 text-primary">
								{testimonial.name
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<div>
							<div className="font-semibold">
								{testimonial.name}
							</div>
							<div className="text-sm text-muted-foreground">
								{testimonial.role}
							</div>
						</div>
					</div>
					<div className="flex mb-4">
						{[...Array(testimonial.rating)].map((_, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.3 + i * 0.1 }}
							>
								<Star
									className="h-4 w-4 fill-primary text-primary mr-0.5"
								/>
							</motion.div>
						))}
					</div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="relative flex-grow"
					>
						<div className="absolute -top-2 -left-2 text-4xl text-primary/10 font-serif">&quot;</div>
						<p className="text-muted-foreground relative z-10 pt-2">
							{testimonial.content}
						</p>
						<div className="absolute -bottom-2 -right-2 text-4xl text-primary/10 font-serif">&quot;</div>
					</motion.div>
				</CardContent>
			</Card>
		</motion.div>
	);
}
