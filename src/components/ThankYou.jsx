import { motion } from "framer-motion";
import Footer from "./Footer";
// import FetchIcon from "../assets/icon_set";

function NotFound() {
    return (
        <motion.section
            id="thank-you"
            className="text-left max-w-screen-lg m-auto px-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1 initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 250 }}>
                THANK YOU<span className="blinking-cursor">_</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <span className="leading-8">Your message has been recieved. I will respond as soon as I am able.</span>
            </motion.div>
            <Footer />
        </motion.section>
    )
}

export default NotFound