import App from "@/App"
import Login from "@/pages/Login"
import { Route, Routes } from "react-router"

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default AppRoutes
