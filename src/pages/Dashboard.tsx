import { TaskDashboard } from "@/components/TaskDashboard";

export default function Dashboard() {
	return (
		<main className="flex flex-col min-h-screen p-4 md:p-6 lg:p-8">
			<TaskDashboard />
		</main>
	);
}
