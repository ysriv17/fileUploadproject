import { BrowserRouter } from "react-router-dom"
import {Navbar,  About, Contact, Experience, Feedbacks, Hero, StarsCanvas, Tech, Works } from "./components"
const App =()=> {
  return (
    
<BrowserRouter>
  <div className="relative z-0 bg-primary bg-main-pattern  bg-contain bg-no-repeat bg-position-0.23">
   <div className="bg-hero-pattern bg-cover bg-center">
     <Navbar></Navbar>
     <Hero/>
     </div>
     <About/>
     {/* <div className="bg-hero "> */}
          <Experience />
     {/* </div> */}
    
     <Tech/>
     <div className="bg-hero-pattern">
          <Works />
     </div>
    
     <Feedbacks/>
     <div className="relative z-0">
      <Contact/>
      <StarsCanvas/>
     
   </div>
</div>
</BrowserRouter>

    
  )
}

export default App
 