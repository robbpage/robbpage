import { motion } from "framer-motion";
import Footer from "./Footer";

function NotFound() {
    return (
        <motion.section
            id="fourOHfour"
            className="text-left max-w-screen-lg m-auto px-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1 initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 250 }}>
                404<span className="blinking-cursor">_</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <span className="leading-8">It appears something has gone wrong. Try not to think of it as a mistake, but rather a learning experience. Click one of the links above to get back on track.</span>
            </motion.div>
            <Footer />
        </motion.section>
    )
}

export default NotFound