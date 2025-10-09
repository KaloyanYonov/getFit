import { BrowserRouter,Routes,Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import AdviceForm from "./pages/AdviceForm"
import Bulk from "./pages/Bulk"
import Cut from "./pages/Cut"
import NotFound from "./pages/NotFound"


export default function App(){

  return(
    <div className="bg-linear-90 from-purple-300 to-gray-400">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/advice" element={<AdviceForm/>}/>
          <Route path="/bulk" element={<Bulk/>}/>
          <Route path="/cut" element={<Cut/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )

}