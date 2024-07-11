import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CrearVideo from "../pages/CrearVideo";
import Cabecera from "../components/Cabecera";
import Pie from "../components/Pie";
import NotFound from "../pages/NotFound/NotFound";
import { VideoProvider } from "../context";

function AppRoutes() {
    return (
        <VideoProvider>
            <BrowserRouter>
                <Cabecera />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="CrearVideo" element={<CrearVideo />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Pie />
            </BrowserRouter>
        </VideoProvider>
    )
}

export default AppRoutes