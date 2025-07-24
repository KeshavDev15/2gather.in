"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
	{
		question: "How do I create my first meetup?",
		answer: "Creating your first meetup is simple! Sign up for an account, click 'Create Event', fill in the details like title, description, date, and location, then publish. You can start inviting people immediately.",
	},
	{
		question: "Is 2gather.in free to use?",
		answer:
			"2gather.in offers both free and premium plans. The free plan includes basic event creation and management tools, while premium plans offer advanced features like analytics, custom branding, priority support, and more.",
	},
	{
		question: "How do I promote my events to reach more people?",
		answer:
			"2gather.in provides multiple promotion tools including social media integration, email invitations, and community discovery features. Premium users can boost their events in search results and access targeted promotional campaigns.",
	},
	{
		question: "Can I collect payments for paid events?",
		answer:
			"Yes! 2gather.in integrates with popular payment processors, allowing you to sell tickets directly through your event page. We handle secure payment processing with competitive transaction fees.",
	},
	{
		question: "How does the matching algorithm work?",
		answer:
			"Our smart matching algorithm connects people based on shared interests, location, past event participation, and mutual connections. This helps ensure that the events you see are truly relevant to your interests.",
	},
	{
		question: "What kind of analytics can event organizers access?",
		answer:
			"Organizers can view detailed insights including attendance rates, engagement metrics, audience demographics, traffic sources, and revenue data for paid events. Premium plans offer even more advanced analytics capabilities.",
	},
];

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-24 sm:py-32" id="faq">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mx-auto max-w-2xl text-center mb-16"
				>
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Got questions? We&apos;ve got answers. If you don&apos;t see what
						you&apos;re looking for, reach out to our support team.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mx-auto max-w-3xl space-y-4"
				>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Card className="overflow-hidden border-l-4 hover:border-primary transition-colors duration-300">
								<CardHeader className="p-0">
									<motion.button
										onClick={() => handleToggle(index)}
										className="flex w-full items-center justify-between p-6 text-left"
										whileHover={{
											backgroundColor: "rgba(var(--muted), 0.1)",
										}}
										transition={{ duration: 0.2 }}
									>
										<motion.span
											className="text-lg font-medium"
											animate={{
												color:
													openIndex === index
														? "hsl(var(--primary))"
														: "hsl(var(--foreground))",
											}}
										>
											{faq.question}
										</motion.span>
										<motion.div
											initial={false}
											animate={{ rotate: openIndex === index ? 180 : 0 }}
											transition={{ duration: 0.3 }}
										>
											{openIndex === index ? (
												<ChevronUp className="h-5 w-5 shrink-0 text-primary" />
											) : (
												<ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
											)}
										</motion.div>
									</motion.button>
								</CardHeader>
								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
										>
											<CardContent className="pb-6 pt-0 px-6">
												<motion.p
													initial={{ y: 10, opacity: 0 }}
													animate={{ y: 0, opacity: 1 }}
													transition={{ duration: 0.3, delay: 0.1 }}
													className="text-muted-foreground"
												>
													{faq.answer}
												</motion.p>
											</CardContent>
										</motion.div>
									)}
								</AnimatePresence>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
}
