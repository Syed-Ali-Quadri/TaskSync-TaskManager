import { SignupForm } from "@/components/SignupForm";
import { useEffect } from "react";

export default function SignInPage() {
	useEffect(() => {
		document.title = "TaskSync - Sign Up";
	}, []);
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
			<SignupForm />
		</main>
	);
}
