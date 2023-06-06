import Homepage from "./assets/components/Homepage"
import { Route, Routes } from "react-router-dom"
import AboutUs from "./assets/components/AboutUs"
import Services from "./assets/components/Services"

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
    </Routes>
    </>
  )
}

export default App
