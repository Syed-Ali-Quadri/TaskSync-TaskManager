import { SignInForm } from "@/components/SigninForm";
import { useEffect } from "react";

export default function SignInPage() {
	useEffect(() => {
		document.title = "TaskSync - Sign In";
	}, []);
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
			<SignInForm />
		</main>
	);
}
