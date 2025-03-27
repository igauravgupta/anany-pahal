import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import Hero from  "../components/Home/Hero";
import Contact from "../components/Contact/Contact";
import DonatePage from "../components/Donate/DonatePage"; 
import Initiatives from "../components/Initiatives/Initiatives";
import News from "../components/News/News";
    



export default function WRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Hero/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="donate" element={<DonatePage/>}/>
                    <Route path="initiatives" element={<Initiatives/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}