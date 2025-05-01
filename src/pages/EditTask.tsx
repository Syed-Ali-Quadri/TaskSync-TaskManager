import { EditTaskForm } from "@/components/EditTaskForm";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function EditTask() {
	const { taskId } = useParams();
	// TODO: I can't send taskId directly, first I have get task data from backend then that data I have to send.
	console.log(taskId);

	useEffect(() => {
		document.title = "TaskSync - Edit task";
	}, []);

	const taskData = {
		title: "Help mom to get the groceries.",
		description: "",
		priority: "medium",
		dueDate: "Tue Apr 22 2025 00:00:00 GMT+0530 (India Standard Time)",
		status: "pending"
	};
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
			<EditTaskForm
				task={taskData}
				onCancel={() => console.log("Cancel clicked")}
			/>
		</main>
	);
}
