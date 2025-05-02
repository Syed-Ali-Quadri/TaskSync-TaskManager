import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import { useEffect } from "react";

export default function ContactPage() {
	useEffect(() => {
		document.title = "TaskSync - Contact Us";
	}, []);
	return (
		<div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
			<div className="mx-auto max-w-5xl">
				<div className="text-center mb-12">
					<h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
						Contact Us
					</h1>
					<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
						Have questions or want to get in touch? We'd love to
						hear from you. Fill out the form below or use our
						contact information.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					<ContactForm />
					<ContactInfo />
				</div>
			</div>
		</div>
	);
}
