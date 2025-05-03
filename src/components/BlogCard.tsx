/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router";
import { format } from "date-fns";
import { Clock, Calendar } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function BlogCard({ post, featured = false }) {
	const {
		id,
		title,
		excerpt,
		featuredImage,
		category,
		tags,
		author,
		publishedAt,
		readTime = 5
	} = post;

	return (
		<Link to={`/blog`}>
			<Card
				className={`overflow-hidden h-full transition-all hover:shadow-md ${featured
					? "md:col-span-2"
					: ""}`}
			>
				<div className="relative">
					<div
						className="w-full h-48 bg-center bg-cover"
						style={{
							backgroundImage: featuredImage
								? `url(${featuredImage})`
								: `url(/placeholder.svg?height=300&width=600)`
						}}
					/>
					<Badge
						className="absolute top-4 left-4"
						variant="secondary"
					>
						{category}
					</Badge>
				</div>
				<CardContent className="p-6">
					<h3
						className={`font-bold tracking-tight mb-2 ${featured
							? "text-2xl"
							: "text-xl"}`}
					>
						{title}
					</h3>
					<p className="text-muted-foreground line-clamp-2 mb-4">
						{excerpt || title}
					</p>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-2">
							<Avatar className="h-6 w-6">
								<AvatarImage
									src={author.avatar || "/placeholder.svg"}
									alt={author.name}
								/>
								<AvatarFallback>
									{author.name.charAt(0)}
								</AvatarFallback>
							</Avatar>
							<span className="text-sm text-muted-foreground">
								{author.name}
							</span>
						</div>
					</div>
				</CardContent>
				<CardFooter className="px-6 py-4 border-t bg-muted/30 flex justify-between">
					<div className="flex items-center text-sm text-muted-foreground">
						<Calendar className="mr-1 h-3 w-3" />
						<span>
							{format(new Date(publishedAt), "MMM d, yyyy")}
						</span>
					</div>
					<div className="flex items-center text-sm text-muted-foreground">
						<Clock className="mr-1 h-3 w-3" />
						<span>
							{readTime} min read
						</span>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}
