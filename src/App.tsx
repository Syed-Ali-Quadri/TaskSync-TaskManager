import AppRoutes from "./routes/AppRoutes";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
	
	return (
		<>
			<Navbar />
			<AppRoutes />
			<Footer />
		</>
	);
};

export default App;
