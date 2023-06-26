import Homepage from "./assets/components/Homepage"
import { Route, Routes } from "react-router-dom"
import AboutUs from "./assets/components/AboutUs"
import Services from "./assets/components/Services"
import Disclaimer from "./assets/components/Disclaimer"

function App() {

  const isMobile = window.innerWidth < 768;
  
  return (
    <>
    <Routes>
      <Route index element={ isMobile ? <Disclaimer /> : <Homepage /> } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
    </Routes>
    </>
  )
}

export default App
