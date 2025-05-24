"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Users, Globe, MessageSquare, Map, Shield } from "lucide-react";
import { fadeIn, fadeInUp, staggerContainer, cardHoverVariants } from "@/lib/animations";

const features = [
	{
		name: "Easy Event Creation",
		description:
			"Create and customize your events in minutes with our intuitive interface.",
		icon: Calendar,
	},
	{
		name: "Community Building",
		description:
			"Connect with like-minded people and build lasting relationships.",
		icon: Users,
	},
	{
		name: "Global Reach",
		description:
			"Host events that reach audiences worldwide or focus on local communities.",
		icon: Globe,
	},
	{
		name: "Interactive Chat",
		description:
			"Engage with attendees before, during, and after events with built-in chat.",
		icon: MessageSquare,
	},
	{
		name: "Location Services",
		description:
			"Find perfect venues and manage hybrid events with ease.",
		icon: Map,
	},
	{
		name: "Secure Platform",
		description:
			"Enterprise-grade security and privacy features to protect your data.",
		icon: Shield,
	},
];

export function Features() {
	return (
		<section className="py-24 sm:py-32" id="features">
			<motion.div
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				variants={staggerContainer}
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
			>
				<motion.div
					variants={fadeInUp}
					className="mx-auto max-w-2xl text-center"
				>
					<h2 className="text-base font-semibold leading-7 text-primary">
						Everything you need
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
						Powerful Features for Event Organizers
					</p>
					<p className="mt-6 text-lg leading-8 text-muted-foreground">
						Create, manage, and grow your events with our comprehensive platform.
					</p>
				</motion.div>

				<motion.div
					variants={fadeIn}
					className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
				>
					<motion.div
						variants={staggerContainer}
						className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-3"
					>
						{features.map((feature) => (
							<motion.div
								key={feature.name}
								variants={cardHoverVariants}
								whileHover="hover"
								initial="initial"
							>
								<Card className="relative overflow-hidden h-full transition-colors hover:bg-muted/50">
									<motion.div
										className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent"
										initial={{ x: "-100%" }}
										whileHover={{ x: "100%" }}
										transition={{ duration: 0.8 }}
									/>
									<div className="relative p-6 h-full">
										<motion.div
											initial={{ scale: 0.5, opacity: 0 }}
											whileInView={{ scale: 1, opacity: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3 }}
											className="mb-6"
										>
											<div className="rounded-lg bg-primary/10 p-3 w-fit">
												<feature.icon
													className="h-6 w-6 text-primary"
													aria-hidden="true"
												/>
											</div>
										</motion.div>
										<motion.div
											initial={{ y: 20, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.2 }}
										>
											<h3 className="text-lg font-semibold leading-8">
												{feature.name}
											</h3>
											<p className="mt-2 text-base leading-7 text-muted-foreground">
												{feature.description}
											</p>
										</motion.div>
									</div>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</motion.div>
		</section>
	);
}
