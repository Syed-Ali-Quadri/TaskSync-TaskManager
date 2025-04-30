import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import CreateTask from "@/pages/CreateTask";
import EditTask from "@/pages/EditTask";
import PageNotFound from "@/pages/PageNotFound";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<PageNotFound />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/create-task" element={<CreateTask />} />
			<Route path="/edit-task/:taskId" element={<EditTask />} />
		</Routes>
	);
};

export default AppRoutes;
