import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import Hero from  "../components/Hero";
import Contact from "../components/Contact";
import Vision from "../components/Vision";
    



export default function WRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="vision" element={<Vision/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}