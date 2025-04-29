import App from "@/App"
import Signup from "@/pages/SignIn"
import { Route, Routes } from "react-router"

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default AppRoutes
