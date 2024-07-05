import { BrowserRouter, Routes, Route } from "react-router-dom";
import './AppRoutes.css';
import Home from "../pages/Home";
import CrearVideo from "../pages/CrearVideo";
import Cabecera from "../components/Cabecera";
import Pie from "../components/Pie";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecera />
            <Routes>
                <Route index element={<Home />} />
                <Route path="CrearVideo" element={<CrearVideo />} />
            </Routes>
            <Pie />
        </BrowserRouter>
    )
}

export default AppRoutes