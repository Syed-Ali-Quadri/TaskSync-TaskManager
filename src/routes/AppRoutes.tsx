import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import CreateTask from "@/pages/CreateTask";
import EditTask from "@/pages/EditTask";
import PageNotFound from "@/pages/PageNotFound";
import ContactPage from "@/pages/Contact";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Dashboard from "@/pages/Dashboard";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/tasks/create-task" element={<CreateTask />} />
			<Route path="/tasks/:taskId/edit" element={<EditTask />} />
		</Routes>
	);
};

export default AppRoutes;
