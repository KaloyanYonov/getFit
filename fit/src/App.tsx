import { BrowserRouter,Routes,Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import AdviceForm from "./pages/AdviceForm"
import Bulk from "./pages/Bulk"
import Cut from "./pages/Cut"
import NotFound from "./pages/NotFound"
import PPL from "./pages/splits/PPL"
import Bro from "./pages/splits/Bro"
import WholeBody from "./pages/splits/WholeBody"
import UpperLower from "./pages/splits/UpperLower"
import Diet from "./pages/Diet"
import Cardio from "./pages/splits/Cardio"

export default function App(){

  return(
    <div className="min-h-screen bg-[#edf5fc]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/advice" element={<AdviceForm/>}/>
          <Route path="/bulk" element={<Bulk/>}/>
          <Route path="/cut" element={<Cut/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/splits/ppl" element={<PPL/>}/>
          <Route path="/splits/bro" element={<Bro/>}/>
          <Route path="/splits/wholebody" element={<WholeBody/>}/>
          <Route path="/splits/cardio" element={<Cardio/>}/>
          <Route path="/splits/upperlower" element={<UpperLower/>}/>
          <Route path="/diet" element={<Diet/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  )

}