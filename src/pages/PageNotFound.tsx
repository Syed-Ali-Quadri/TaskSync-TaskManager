import { Link } from "react-router";
import { FileQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function NotFound() {
	useEffect(() => {
		document.title = "TaskSync - Page Not Found";
	}, []);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-6 py-24 bg-background">
			<div className="flex flex-col items-center max-w-md text-center">
				<div className="flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-8">
					<FileQuestion className="h-10 w-10 text-muted-foreground" />
				</div>

				<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
					404
				</h1>
				<h2 className="text-2xl font-semibold mb-3">Page not found</h2>

				<p className="mb-8 text-muted-foreground">
					Sorry, we couldn't find the page you're looking for. The
					page might have been moved, deleted, or perhaps the URL was
					mistyped.
				</p>

				<div className="flex flex-col sm:flex-row gap-4">
					<Button asChild>
						<Link to="/">Return to home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
