import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const formSchema = z.object({
	title: z
		.string()
		.min(2, { message: "Title must be at least 2 characters" })
		.max(50, { message: "Title must be less than 50 characters" }),
	description: z
		.string()
		.max(500, { message: "Description must be less than 500 characters" })
		.optional(),
	priority: z.enum(["low", "medium", "high"], {
		required_error: "Please select a priority"
	}),
	dueDate: z.date({ required_error: "Please select a due date" })
});

export function CreateTask() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			priority: undefined,
			dueDate: undefined
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
				<CardTitle className="text-2xl font-bold">
					Create Task
				</CardTitle>
				<CardDescription>Add a new task to your list</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-4"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) =>
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input
											placeholder="Task title"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>}
						/>

						<FormField
							control={form.control}
							name="description"
							render={({ field }) =>
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Task description (optional)"
											className="resize-none min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Briefly describe the task (optional)
									</FormDescription>
									<FormMessage />
								</FormItem>}
						/>

						<FormField
							control={form.control}
							name="priority"
							render={({ field }) =>
								<FormItem>
									<FormLabel>Priority</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select priority" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="low">
												Low
											</SelectItem>
											<SelectItem value="medium">
												Medium
											</SelectItem>
											<SelectItem value="high">
												High
											</SelectItem>
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>}
						/>

						<FormField
							control={form.control}
							name="dueDate"
							render={({ field }) =>
								<FormItem className="flex flex-col">
									<FormLabel>Due Date</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-full pl-3 text-left font-normal",
														!field.value &&
															"text-muted-foreground"
													)}
												>
													{field.value
														? format(
																field.value,
																"PPP"
															)
														: <span>
																Pick a date
															</span>}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>}
						/>

						<Button
							type="submit"
							className="w-full mt-2"
							disabled={isLoading}
						>
							{isLoading ? "Creating task..." : "Create task"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
