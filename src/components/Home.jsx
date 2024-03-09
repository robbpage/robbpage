import { motion } from "framer-motion"
import FetchIcon from "../assets/icon_set"
import Footer from "./Footer"

function Home() {
    return (
        <motion.section
            id="home"
            className="text-left max-w-screen-lg m-auto px-10 text-gray-400"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1 initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 250 }}>
                HI, I&apos;M ROBB<span className="blinking-cursor">_</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }}>
                <span className="leading-8">With nearly <span className="text-gray-300">three decades</span> of professional experience as a web developer and designer, my journey began in the first days of the internet, setting the stage for a career marked by continual <span className="text-gray-300">adaptation</span> to dynamic shifts in technology and methodology. This has given me a <span className="text-gray-300">diverse skill set</span>, cultivated over years of evolving alongside the digital landscape.
                <br /><br />
                Driven by an unwavering <span className="text-gray-300">motivation</span> and a knack for <span className="text-gray-300">overcoming challenges</span>, I bring to the table not just technical expertise but also outstanding <span className="text-gray-300">leadership, time-management, and organizational skills</span>. I thrive in both solo and collaborative environments, maintaining an unyielding focus on the task (or tasks) at hand. A perpetual learner, my insatiable quest for knowledge ensures that I quickly grasp new concepts, enabling me to <span className="text-gray-300">continuously improve at my craft</span>.</span><br /><br />
                <h5 className="text-xl text-green-light mt-4">TLDR;</h5>
                I&apos;m a skilled professional that learns and adapts quickly and I work hard.
            </motion.div>
            <a href="/robbpage_resume_2024.pdf" type="pdf" target="_blank">
            <button className="block m-auto mt-10 mb-10 w-full sm:w-auto">
                <FetchIcon id="download" /><span className="hidden sm:inline-block">PRINTABLE </span><span className="text-[1rem] sm:text-xl"> PDF RESUM&Eacute;</span>
            </button>
            </a>
            <Footer />
        </motion.section>
    )
}

export default Home