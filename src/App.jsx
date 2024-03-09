import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from './components/Home';
import Skills from './components/Skills';
import History from './components/History';
import Work from './components/Work';
import Contact from './components/Contact';
import ThankYou from "./components/ThankYou";
import NotFound from "./components/NotFound";
import FetchIcon from "./assets/icon_set";

function App() {
    const location = useLocation()
    return (
        <>
        <nav className="flex justify-evenly max-w-screen-lg m-auto pt-12 pb-10 px-4">
            <NavLink to="/"><div id="nav-home" className="nav-item"><FetchIcon id="home" />HOME</div></NavLink>
            <NavLink to="/skills"><div id="nav-skills" className="nav-item"><FetchIcon id="skills" />SKILLS</div></NavLink>
            <NavLink to="/history"><div id="nav-history" className="nav-item"><FetchIcon id="history" />HISTORY</div></NavLink>
            <NavLink to="/work"><div id="nav-work" className="nav-item"><FetchIcon id="work" />WORK</div></NavLink>
            <NavLink to="/contact"><div id="nav-contact" className="nav-item"><FetchIcon id="contact" />CONTACT</div></NavLink>
        </nav>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={ <Home /> } />
                <Route path="/skills" element={ <Skills /> } />
                <Route path="/history" element={ <History /> } />
                <Route path="/work" element={ <Work /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/thank-you" element={ <ThankYou /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </AnimatePresence>
        </>
    )
}

export default App