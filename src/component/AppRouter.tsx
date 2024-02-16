import { Route, Routes } from "react-router-dom"
import TikTakToe from "../pages/TikTakToe"
import TikTakHome from "./TikTakToe"


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<TikTakHome/>} />
      <Route path="/play" element={<TikTakToe />} />
    </Routes>
  )
}

export default AppRouter
