import App from "@/App"
import Home from "@/pages/Home"
import SignIn from "@/pages/SignIn"
import SignUp from "@/pages/SignUp"
import { Route, Routes } from "react-router"

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes
