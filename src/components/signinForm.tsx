import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().email({ message: "Please enter a valid email address" }),
	password: z.string().min(1, { message: "Password is required" })
});

export function SignInForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		// Simulate API call
		setTimeout(() => {
			console.log(values);
			setIsLoading(false);
			form.reset();
		}, 1000);
	}

	return (
		<Card className="w-full max-w-md mx-auto">
			<CardHeader className="space-y-1">
				<CardTitle className="text-2xl font-bold">Sign in</CardTitle>
				<CardDescription>
					Enter your email and password to access your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) =>
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="m@example.com"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) =>
								<FormItem>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>}
						/>	
						<Button
							type="submit"
							className="w-full mt-2 cursor-pointer"
							disabled={isLoading}
						>
							{isLoading ? "Signing in..." : "Sign in"}
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter className="flex justify-center">
				<p className="text-sm text-muted-foreground">
					Don't have an account?{" "}
					<a
						href="/signup"
						className="text-primary underline-offset-4 hover:underline"
					>
						Sign up
					</a>
				</p>
			</CardFooter>
		</Card>
	);
}
