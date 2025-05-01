import { CreateTaskForm } from "@/components/CreateTaskForm";
import { useEffect } from "react";

export default function CreateTask() {
	useEffect(() => {
		document.title = "TaskSync - Create task";
	}, []);
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
			<CreateTaskForm />
		</main>
	);
}
