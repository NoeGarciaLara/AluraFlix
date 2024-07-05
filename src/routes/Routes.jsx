import { BrowserRouter, Routes, Route } from "react-router-dom";
import './AppRoutes.css';
import Home from "../pages/Home";
import CrearVideo from "../pages/CrearVideo";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="CrearVideo" element={<CrearVideo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes