import { useState } from "react";
import { Link, useLocation } from "react-router"; // <-- Updated
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
	const location = useLocation(); // <-- Updated
	const pathname = location.pathname; // <-- Updated
	const [isOpen, setIsOpen] = useState(false);

	const routes = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About Us" },
		{ href: "/services", label: "Services" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact Us" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
			<div className="container flex h-16 items-center">
				{/* Logo - Left Side */}
				<div className="mr-4 md:flex">
					<Link to="/" className="flex items-center space-x-2">
						<span className="pl-4 text-xl font-bold tracking-tighter">TaskSync</span>
					</Link>
				</div>

				{/* Mobile Navigation */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="lg:hidden">
						<Button
							variant="ghost"
							size="icon"
							className="ml-auto mr-2"
						>
							<Menu className="h-5 w-5" />
							<span className="sr-only">
								Toggle navigation menu
							</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<nav className="flex flex-col gap-4 mt-8">
							{routes.map(route =>
								<Link
									key={route.href}
									to={route.href}
									className={`text-lg font-medium transition-colors hover:text-primary ${pathname === route.href
										? "text-primary"
										: "text-muted-foreground"}`}
									onClick={() => setIsOpen(false)}
								>
									{route.label}
								</Link>
							)}
							<div className="flex flex-col gap-2 mt-4">
								<Button asChild variant="outline">
									<Link to="/signin">Sign In</Link>
								</Button>
								<Button asChild>
									<Link to="/signup">Sign Up</Link>
								</Button>
							</div>
						</nav>
					</SheetContent>
				</Sheet>

				{/* Desktop Navigation - Center */}
				<nav className="mx-auto hidden lg:flex">
					<ul className="flex gap-6">
						{routes.map(route =>
							<li key={route.href}>
								<Link
									to={route.href}
									className={`text-sm font-medium transition-colors hover:text-primary ${pathname === route.href
										? "text-primary"
										: "text-muted-foreground"}`}
								>
									{route.label}
								</Link>
							</li>
						)}
					</ul>
				</nav>

				{/* Auth Buttons - Right Side */}
				<div className="ml-auto pr-2 hidden lg:flex lg:items-center lg:gap-4">
					<Button asChild variant="ghost">
						<Link to="/signin">Sign In</Link>
					</Button>
					<Button asChild>
						<Link to="/signup">Sign Up</Link>
					</Button>
				</div>
			</div>
		</header>
	);
}
