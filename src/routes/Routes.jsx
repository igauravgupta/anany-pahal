import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import Hero from  "../components/Home/Hero";
import Contact from "../components/Contact/Contact";
import Vision from "../components/Vision/Vision";
import Team from "../components/Team/Team";
import Gallery from "../components/Gallery/Gallery";
import DonatePage from "../components/Donate/DonatePage"; 
    



export default function WRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="vision" element={<Vision/>}/>
                    <Route path="team" element={<Team/>}/>
                    <Route path="gallery" element={<Gallery/>}/>
                    <Route path="donate" element={<DonatePage/>}/>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}