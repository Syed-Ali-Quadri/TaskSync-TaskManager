import { useState } from "react";
import {
	CheckCircle2,
	Clock,
	ListTodo,
	AlertCircle,
	Search,
	Plus,
	Filter,
	ArrowUpDown,
	Calendar
} from "lucide-react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { TaskList } from "@/components/TaskList";
import { TaskSummaryCard } from "@/components/TaskSummaryCard";

// Sample task data - in a real app, this would come from your API or database
const sampleTasks = [
	{
		id: "task-1",
		title: "Complete project proposal",
		description:
			"Write up the project proposal including timeline, budget, and resource requirements.",
		status: "in-progress",
		priority: "high",
		dueDate: new Date(2023, 11, 31),
		createdAt: new Date(2023, 11, 15),
		assignedTo: "John Doe",
		tags: ["project", "documentation"]
	},
	{
		id: "task-2",
		title: "Review client feedback",
		description:
			"Go through client feedback and make necessary adjustments to the design.",
		status: "todo",
		priority: "medium",
		dueDate: new Date(2023, 11, 25),
		createdAt: new Date(2023, 11, 10),
		assignedTo: "Jane Smith",
		tags: ["design", "feedback"]
	},
	{
		id: "task-3",
		title: "Update website content",
		description:
			"Update the company website with new product information and team members.",
		status: "completed",
		priority: "low",
		dueDate: new Date(2023, 11, 20),
		createdAt: new Date(2023, 11, 5),
		assignedTo: "John Doe",
		tags: ["website", "content"]
	},
	{
		id: "task-4",
		title: "Prepare for client meeting",
		description:
			"Create presentation slides and gather necessary materials for the upcoming client meeting.",
		status: "todo",
		priority: "high",
		dueDate: new Date(2023, 11, 22),
		createdAt: new Date(2023, 11, 18),
		assignedTo: "Jane Smith",
		tags: ["meeting", "presentation"]
	},
	{
		id: "task-5",
		title: "Fix navigation bug",
		description:
			"Address the navigation issue reported by users on mobile devices.",
		status: "in-progress",
		priority: "high",
		dueDate: new Date(2023, 11, 23),
		createdAt: new Date(2023, 11, 19),
		assignedTo: "John Doe",
		tags: ["bug", "mobile"]
	},
	{
		id: "task-6",
		title: "Quarterly report",
		description:
			"Compile and analyze data for the quarterly performance report.",
		status: "completed",
		priority: "medium",
		dueDate: new Date(2023, 11, 15),
		createdAt: new Date(2023, 11, 1),
		assignedTo: "Jane Smith",
		tags: ["report", "analysis"]
	},
	{
		id: "task-7",
		title: "Team building event",
		description:
			"Plan and organize a team building activity for the department.",
		status: "todo",
		priority: "low",
		dueDate: new Date(2024, 0, 15),
		createdAt: new Date(2023, 11, 20),
		assignedTo: "John Doe",
		tags: ["team", "event"]
	},
	{
		id: "task-8",
		title: "Update user documentation",
		description: "Revise the user guide to reflect recent feature changes.",
		status: "in-progress",
		priority: "medium",
		dueDate: new Date(2023, 11, 28),
		createdAt: new Date(2023, 11, 17),
		assignedTo: "Jane Smith",
		tags: ["documentation", "user-guide"]
	}
];

export function TaskDashboard() {
	const [searchQuery, setSearchQuery] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");
	const [priorityFilter, setPriorityFilter] = useState("all");
	const [sortBy, setSortBy] = useState("dueDate");

	// Filter and sort tasks
	const filteredTasks = sampleTasks
		.filter(task => {
			const matchesSearch =
				task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				task.description
					.toLowerCase()
					.includes(searchQuery.toLowerCase());

			const matchesStatus =
				statusFilter === "all" || task.status === statusFilter;

			const matchesPriority =
				priorityFilter === "all" || task.priority === priorityFilter;

			return matchesSearch && matchesStatus && matchesPriority;
		})
		.sort((a, b) => {
			if (sortBy === "dueDate") {
				return (
					new Date(a.dueDate).getTime() -
					new Date(b.dueDate).getTime()
				);
			} else if (sortBy === "priority") {
				const priorityOrder = { high: 0, medium: 1, low: 2 };
				return (
					priorityOrder[a.priority as keyof typeof priorityOrder] -
					priorityOrder[b.priority as keyof typeof priorityOrder]
				);
			} else if (sortBy === "title") {
				return a.title.localeCompare(b.title);
			}
			return 0;
		});

	// Calculate task statistics
	const totalTasks = sampleTasks.length;
	const pendingTasks = sampleTasks.filter(task => task.status !== "completed")
		.length;
	const completedTasks = sampleTasks.filter(
		task => task.status === "completed"
	).length;

	// Tasks due within the next 7 days
	const today = new Date();
	const nextWeek = new Date(today);
	nextWeek.setDate(today.getDate() + 7);

	const dueSoonTasks = sampleTasks.filter(task => {
		const dueDate = new Date(task.dueDate);
		return (
			dueDate >= today &&
			dueDate <= nextWeek &&
			task.status !== "completed"
		);
	}).length;

	return (
		<div className="container mx-auto max-w-7xl">
			{/* Page Header */}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
				<div>
					<h1 className="text-3xl font-bold mb-1">Task Dashboard</h1>
					<p className="text-muted-foreground">
						Manage and track all your tasks in one place
					</p>
				</div>
				<Button asChild className="mt-4 md:mt-0">
					<Link to="/tasks/create-task">
						<Plus className="mr-2 h-4 w-4" /> Create Task
					</Link>
				</Button>
			</div>

			{/* Task Summary Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
				<TaskSummaryCard
					title="All Tasks"
					count={totalTasks}
					icon={<ListTodo className="h-5 w-5" />}
					color="bg-blue-500"
				/>
				<TaskSummaryCard
					title="Pending Tasks"
					count={pendingTasks}
					icon={<Clock className="h-5 w-5" />}
					color="bg-amber-500"
				/>
				<TaskSummaryCard
					title="Completed Tasks"
					count={completedTasks}
					icon={<CheckCircle2 className="h-5 w-5" />}
					color="bg-green-500"
				/>
				<TaskSummaryCard
					title="Due Soon"
					count={dueSoonTasks}
					icon={<AlertCircle className="h-5 w-5" />}
					color="bg-red-500"
				/>
			</div>

			{/* Task Filters */}
			<div className="flex flex-col md:flex-row gap-4 mb-6">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
					<Input
						placeholder="Search tasks..."
						className="pl-10"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
					<Select
						value={statusFilter}
						onValueChange={setStatusFilter}
					>
						<SelectTrigger className="w-full">
							<div className="flex items-center">
								<Filter className="mr-2 h-4 w-4" />
								<SelectValue placeholder="Status" />
							</div>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Statuses</SelectItem>
							<SelectItem value="todo">To Do</SelectItem>
							<SelectItem value="in-progress">
								In Progress
							</SelectItem>
							<SelectItem value="completed">Completed</SelectItem>
						</SelectContent>
					</Select>

					<Select
						value={priorityFilter}
						onValueChange={setPriorityFilter}
					>
						<SelectTrigger className="w-full">
							<div className="flex items-center">
								<AlertCircle className="mr-2 h-4 w-4" />
								<SelectValue placeholder="Priority" />
							</div>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">All Priorities</SelectItem>
							<SelectItem value="high">High</SelectItem>
							<SelectItem value="medium">Medium</SelectItem>
							<SelectItem value="low">Low</SelectItem>
						</SelectContent>
					</Select>

					<Select value={sortBy} onValueChange={setSortBy}>
						<SelectTrigger className="w-full">
							<div className="flex items-center">
								<ArrowUpDown className="mr-2 h-4 w-4" />
								<SelectValue placeholder="Sort By" />
							</div>
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="dueDate">Due Date</SelectItem>
							<SelectItem value="priority">Priority</SelectItem>
							<SelectItem value="title">Title</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			{/* Task List */}
			<div className="bg-card rounded-lg border shadow">
				<div className="p-4 border-b">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold">Tasks</h2>
						<div className="flex items-center text-sm text-muted-foreground">
							<Calendar className="mr-2 h-4 w-4" />
							<span>
								Showing {filteredTasks.length} tasks
							</span>
						</div>
					</div>
				</div>
				<TaskList tasks={filteredTasks} />
			</div>
		</div>
	);
}
