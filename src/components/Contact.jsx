import { motion } from "framer-motion"
import FetchIcon from "../assets/icon_set.jsx"
import Footer from "./Footer.jsx";

let whurl="https://discord.com/api/webhooks/1203006365589839893/e8Al5CE275psoXpABV6FPS-oRQmzxZGKSnNemIe6VGq7sZjbYdHoLHQzRufH0Xxfn9Z-"

const formSubmit = (e) => {
    e.preventDefault();
    const theName = e.target.name.value
    const theEmail = e.target.email.value
    const theMessage = e.target.message.value
    const honeyPot = e.target._gotcha.value
    const toDiscord = {
        "content": "**Name**: " + theName + "\n**Email**: " + theEmail + "\n**Message**: " + theMessage,
        "username": "ROBBPAGE.COM 🌐"
    }
    if(!honeyPot) {
        fetch(whurl + "?wait-true", {"method": "POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(toDiscord)})
        setTimeout(function() { window.open('/thank-you',"_self")},1000)
    }
}

function Contact() {
    return (
        <motion.section
            id="contact"
            className="text-left max-w-screen-lg m-auto px-10 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h1
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 250 }}
            >
                CONTACT<span className="blinking-cursor">_</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="grid sm:grid-cols-[30%_70%]">
                <div className="contact-left pr-10 text-xl pt-10 order-last hidden sm:flex sm:flex-col sm:order-first">
                    <a href="https://www.linkedin.com/in/robbpage/" className="text-[16px]"><FetchIcon id="linkedin" /> LinkedIn</a>
                    <a href="https://www.facebook.com/with2bees" className="text-[16px]"><FetchIcon id="facebook" /> Facebook</a>
                    <a href="https://twitter.com/With2Bees" className="text-[16px]"><FetchIcon id="twitter" /> Twitter</a>
                    <a href="https://www.instagram.com/robb_with2bees/" className="text-[16px]"><FetchIcon id="instagram" /> Instagram</a>
                    <a href="https://github.com/robbpage" className="text-[16px]"><FetchIcon id="github" /> Github</a>
                    <a href="https://with2bees.com" className="text-[16px] hover:text-yellow-300 col-span-2"><FetchIcon id="bee" /> with2bees</a>
                </div>
                <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }} className="contact-right">
                    <div className="pt-10 text-lg relative">
                        {/* <form action="https://public.herotofu.com/v1/61623dc0-b94e-11ee-870a-ff8e0d81300a" method="post" acceptCharset="UTF-8"> */}
                        <form onSubmit={formSubmit}>
                            <input name="name" type="text" className="px-3 py-3 w-full rounded mb-4" placeholder="name" required />
                            <input name="email" type="email" className="px-3 py-3 w-full rounded mb-4" placeholder="email" required />
                            <textarea name="message" rows="4" className="px-3 py-3 w-full rounded" placeholder="message" required></textarea>
                            <button className="block m-auto mt-6 -mb-5 w-full ">SEND YOUR MESSAGE</button>
                            <div style={{ textIndent:"-99999px", whiteSpace: "nowrap", overflow: "hidden", position: "absolute" }} aria-hidden="true">
                                <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
                            </div>
                        </form>
                    </div>
                </motion.div>
            </motion.div>
            <Footer />
        </motion.section>
    )
}

export default Contact