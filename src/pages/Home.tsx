import { Link } from "react-router";
import { motion } from "framer-motion";
import {
	Calendar,
	Bell,
	CheckCircle,
	Tag,
	Search,
	Smartphone
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Animation variants for staggered children animations
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2
		}
	}
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 100 }
	}
};

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Hero Section */}
			<motion.section
				className="w-full py-12 md:py-24 lg:py-32 xl:py-24"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
						<motion.div
							className="flex flex-col justify-center space-y-4"
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.8 }}
						>
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Organize Your Life with TaskSync
								</h1>
								<p className="max-w-[600px] text-gray-500 md:text-xl">
									A beautiful, intuitive calendar app designed
									to help you manage your time effectively and
									never miss important events.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Button size="lg" asChild>
									<Link to="/signup">
										Get Started for Free
									</Link>
								</Button>
								<Button size="lg" variant="outline" asChild>
									<Link to="/demo">See Demo</Link>
								</Button>
							</div>
						</motion.div>
						<motion.div
							className="flex items-center justify-center"
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.8 }}
						>
							<div className="relative w-full h-[350px] md:h-[400px] lg:h-[500px]">
								<img
									src="/task-dashboard.jpg"
									alt="TaskSync Dashboard Preview"
									className="object-contain rounded-lg border shadow-lg"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Features Section */}
			<section className="w-full py-12 md:py-24 lg:py-12 bg-gray-50">
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
								Features
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Everything You Need in a Calendar App
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								TaskSync combines powerful features with a
								simple interface to help you manage your
								schedule effectively.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="p-2 bg-primary/10 rounded-full">
										<Calendar className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold">
										Multiple Views
									</h3>
									<p className="text-gray-500">
										Switch between day, week, month, and
										year views to plan your schedule at
										different levels of detail.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="p-2 bg-primary/10 rounded-full">
										<Bell className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold">
										Smart Reminders
									</h3>
									<p className="text-gray-500">
										Set customizable reminders and
										notifications so you never miss an
										important event or deadline.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="p-2 bg-primary/10 rounded-full">
										<Tag className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold">
										Event Categories
									</h3>
									<p className="text-gray-500">
										Organize events by categories with
										custom colors for better visual
										organization of your schedule.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="p-2 bg-primary/10 rounded-full">
										<CheckCircle className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold">
										Task Integration
									</h3>
									<p className="text-gray-500">
										Add tasks directly to your calendar with
										deadlines, priorities, and completion
										tracking.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="p-2 bg-primary/10 rounded-full">
										<Search className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold">
										Powerful Search
									</h3>
									<p className="text-gray-500">
										Quickly find events and appointments
										with our intelligent search
										functionality.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 flex flex-col items-center text-center space-y-4">
									<div className="p-2 bg-primary/10 rounded-full">
										<Smartphone className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold">
										Cross-Device Sync
									</h3>
									<p className="text-gray-500">
										Seamlessly access your calendar from any
										device with real-time synchronization.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
								How It Works
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Simple Steps to Get Started
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								TaskSync is designed to be intuitive and easy
								to use. Get up and running in minutes.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 mt-12"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div
							className="flex flex-col items-center space-y-4 text-center"
							variants={itemVariants}
						>
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
								1
							</div>
							<h3 className="text-xl font-bold">
								Create an Account
							</h3>
							<p className="text-gray-500">
								Sign up for free and set up your personal
								calendar.
							</p>
						</motion.div>
						<motion.div
							className="flex flex-col items-center space-y-4 text-center"
							variants={itemVariants}
						>
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
								2
							</div>
							<h3 className="text-xl font-bold">
								Add Your Events
							</h3>
							<p className="text-gray-500">
								Create events, set reminders, and organize with
								categories and tags.
							</p>
						</motion.div>
						<motion.div
							className="flex flex-col items-center space-y-4 text-center"
							variants={itemVariants}
						>
							<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
								3
							</div>
							<h3 className="text-xl font-bold">
								Stay Organized
							</h3>
							<p className="text-gray-500">
								Manage your schedule efficiently and receive
								timely reminders for important events.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* App Screenshots Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
								Interface
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Beautifully Designed Interface
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Explore TaskSync's intuitive interface
								designed to help you manage your time more
								effectively.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="mt-12"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<Tabs defaultValue="monthly" className="w-full">
							<TabsList className="grid w-full grid-cols-2 mb-8">
								<TabsTrigger value="monthly">
									Monthly View
								</TabsTrigger>
								<TabsTrigger value="weekly">
									Weekly View
								</TabsTrigger>
							</TabsList>
							<TabsContent
								value="monthly"
								className="flex justify-center"
							>
								<div className="relative w-full max-w-3xl h-[400px] md:h-[500px]">
									<img
										src="/task-monthly.jpeg"
										alt="TaskSync Monthly View"
										className="object-contain rounded-lg border shadow-lg"
									/>
								</div>
							</TabsContent>
							<TabsContent
								value="weekly"
								className="flex justify-center"
							>
								<div className="relative w-full max-w-3xl h-[400px] md:h-[500px]">
									<img
										src="/task-weekly.jpeg"
										alt="TaskSync Weekly View"
										className="object-contain rounded-lg border shadow-lg"
									/>
								</div>
							</TabsContent>
						</Tabs>
					</motion.div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
								Testimonials
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Loved by Users Everywhere
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								See what our users have to say about how
								TaskSync has transformed their time
								management.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 space-y-4">
									<p className="text-gray-500 italic">
										"TaskSync has completely transformed
										how I manage my time. The interface is
										intuitive and the reminder system
										ensures I never miss important
										appointments."
									</p>
									<div className="flex items-center space-x-4">
										<div className="rounded-full bg-gray-100 w-12 h-12" />
										<div>
											<p className="font-medium">
												Alex Johnson
											</p>
											<p className="text-sm text-gray-500">
												Freelance Designer
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 space-y-4">
									<p className="text-gray-500 italic">
										"As a busy professional, TaskSync
										helps me stay on top of my schedule. The
										different view options and task
										integration are particularly helpful."
									</p>
									<div className="flex items-center space-x-4">
										<div className="rounded-full bg-gray-100 w-12 h-12" />
										<div>
											<p className="font-medium">
												Samantha Chen
											</p>
											<p className="text-sm text-gray-500">
												Marketing Manager
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm h-full">
								<CardContent className="p-6 space-y-4">
									<p className="text-gray-500 italic">
										"I've tried many calendar apps, but
										TaskSync stands out for its
										simplicity and powerful features. My
										productivity has increased
										significantly."
									</p>
									<div className="flex items-center space-x-4">
										<div className="rounded-full bg-gray-100 w-12 h-12" />
										<div>
											<p className="font-medium">
												James Rodriguez
											</p>
											<p className="text-sm text-gray-500">
												Software Developer
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<motion.div
						className="flex flex-col items-center justify-center space-y-4 text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
								FAQ
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Frequently Asked Questions
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Find answers to common questions about
								TaskSync.
							</p>
						</div>
					</motion.div>
					<motion.div
						className="mx-auto max-w-3xl mt-12 space-y-4"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold">
										Is my data secure with TaskSync?
									</h3>
									<p className="mt-2 text-gray-500">
										Yes, TaskSync uses industry-standard
										encryption and security practices to
										protect your data. We regularly perform
										security audits and maintain strict
										access controls.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold">
										Can I import events from other calendar
										apps?
									</h3>
									<p className="mt-2 text-gray-500">
										Yes, TaskSync supports importing
										events from popular platforms like
										Google Calendar, Apple Calendar, and
										Microsoft Outlook. Our import wizard
										makes the transition seamless.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold">
										Is there a mobile app available?
									</h3>
									<p className="mt-2 text-gray-500">
										Yes, TaskSync offers mobile apps for
										both iOS and Android devices, allowing
										you to manage your schedule on the go
										with full synchronization.
									</p>
								</CardContent>
							</Card>
						</motion.div>
						<motion.div variants={itemVariants}>
							<Card className="border-0 shadow-sm">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold">
										How do notifications and reminders work?
									</h3>
									<p className="mt-2 text-gray-500">
										TaskSync lets you set customizable
										reminders for events. You can receive
										notifications via email, push
										notifications on your device, or both,
										at specified times before events.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<motion.section
				className="w-full py-12 md:py-24 lg:py-32 bg-primary"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
						<div className="space-y-2">
							<motion.h2
								className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
								initial={{ y: 20, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.2, duration: 0.6 }}
							>
								Ready to Take Control of Your Time?
							</motion.h2>
							<motion.p
								className="mx-auto max-w-[700px] md:text-xl"
								initial={{ y: 20, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.4, duration: 0.6 }}
							>
								Join thousands of users who have transformed
								their time management with TaskSync.
							</motion.p>
						</div>
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							whileInView={{ y: 0, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6, duration: 0.6 }}
						>
							<Button
								size="lg"
								className="bg-white text-primary hover:bg-gray-100"
								asChild
							>
								<Link to="/signup">Get Started Now</Link>
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Footer */}
			<footer className="w-full py-12 md:py-16 lg:py-20">
				<div className="container px-4 md:px-6">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="space-y-4">
							<h3 className="text-lg font-bold">TaskSync</h3>
							<p className="text-sm text-gray-500">
								Simplifying task management for teams and
								individuals since 2025.
							</p>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-bold">Product</h3>
							<ul className="space-y-2 text-sm text-gray-500">
								<li>
									<Link
										to="/features"
										className="hover:text-primary"
									>
										Features
									</Link>
								</li>
								<li>
									<Link
										to="/pricing"
										className="hover:text-primary"
									>
										Pricing
									</Link>
								</li>
								<li>
									<Link
										to="/integrations"
										className="hover:text-primary"
									>
										Integrations
									</Link>
								</li>
								<li>
									<Link
										to="/changelog"
										className="hover:text-primary"
									>
										Changelog
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-bold">Resources</h3>
							<ul className="space-y-2 text-sm text-gray-500">
								<li>
									<Link
										to="/blog"
										className="hover:text-primary"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										to="/help"
										className="hover:text-primary"
									>
										Help Center
									</Link>
								</li>
								<li>
									<Link
										to="/guides"
										className="hover:text-primary"
									>
										Guides
									</Link>
								</li>
								<li>
									<Link
										to="/api"
										className="hover:text-primary"
									>
										API Documentation
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-4">
							<h3 className="text-lg font-bold">Company</h3>
							<ul className="space-y-2 text-sm text-gray-500">
								<li>
									<Link
										to="/about"
										className="hover:text-primary"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										to="/careers"
										className="hover:text-primary"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										to="/contact"
										className="hover:text-primary"
									>
										Contact
									</Link>
								</li>
								<li>
									<Link
										to="/privacy"
										className="hover:text-primary"
									>
										Privacy Policy
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-500">
							© 2025 TaskSync. All rights reserved.
						</p>
						<div className="flex space-x-4 mt-4 md:mt-0">
							<Link
								to="#"
								className="text-gray-500 hover:text-primary"
							>
								<span className="sr-only">Twitter</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-5 w-5"
								>
									<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
								</svg>
							</Link>
							<Link
								to="#"
								className="text-gray-500 hover:text-primary"
							>
								<span className="sr-only">LinkedIn</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-5 w-5"
								>
									<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
									<rect width="4" height="12" x="2" y="9" />
									<circle cx="4" cy="4" r="2" />
								</svg>
							</Link>
							<Link
								to="#"
								className="text-gray-500 hover:text-primary"
							>
								<span className="sr-only">GitHub</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-5 w-5"
								>
									<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
