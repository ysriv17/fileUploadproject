import { BrowserRouter } from "react-router-dom"
import {Navbar,  About, Contact  ,Hero } from "./components"
const App =()=> {
  return (
    
<BrowserRouter>
  <div className="relative z-0  bg-black  bg-cover bg-no-repeat bg-position-0.23">
   <div className="bg-hero-pattern bg-cover bg-center">
     <Navbar></Navbar>
     <Hero/>
     </div>
     <About/>
     <div className="relative z-0">
      <Contact/>
    
   </div>
</div>
</BrowserRouter>

    
  )
}

export default App
 