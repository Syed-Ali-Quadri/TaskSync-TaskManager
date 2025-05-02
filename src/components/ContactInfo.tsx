import {
	// Building,
	// Mail,
	// MapPin,
	// Phone,
	Facebook,
	Twitter,
	Instagram,
	Linkedin
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactInfo() {
	return (
		<div className="space-y-6">
			{/* <Card>
				<CardContent className="p-6">
					<h2 className="text-xl font-semibold mb-6">
						Contact Information
					</h2>

					<div className="space-y-4">
						<div className="flex items-start">
							<MapPin className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium">Address</h3>
								<p className="text-muted-foreground">
									123 Business Avenue
									<br />
									Suite 456
									<br />
									San Francisco, CA 94107
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<Phone className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium">Phone</h3>
								<p className="text-muted-foreground">
									+1 (555) 123-4567
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<Mail className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium">Email</h3>
								<p className="text-muted-foreground">
									contact@yourcompany.com
								</p>
							</div>
						</div>

						<div className="flex items-start">
							<Building className="h-5 w-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
							<div>
								<h3 className="font-medium">Business Hours</h3>
								<p className="text-muted-foreground">
									Monday - Friday: 9:00 AM - 5:00 PM
									<br />
									Saturday & Sunday: Closed
								</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card> */}

			<Card>
				<CardContent className="p-6">
					<h2 className="text-xl font-semibold mb-4">
						Connect With Us
					</h2>
					<p className="text-muted-foreground mb-4">
						Follow us on social media to stay updated with our
						latest news and announcements.
					</p>

					<div className="flex flex-wrap gap-2">
						<Button variant="outline" size="icon" asChild>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<Facebook className="h-4 w-4" />
							</a>
						</Button>
						<Button variant="outline" size="icon" asChild>
							<a
								href="https://x.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<Twitter className="h-4 w-4" />
							</a>
						</Button>
						<Button variant="outline" size="icon" asChild>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<Instagram className="h-4 w-4" />
							</a>
						</Button>
						<Button variant="outline" size="icon" asChild>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
							>
								<Linkedin className="h-4 w-4" />
							</a>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
