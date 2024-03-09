import { NavLink } from "react-router-dom"
import FetchIcon from "../assets/icon_set"

function Footer() {
    return (
        <>
        <div className="grid sm:grid-cols-2 text-justify max-w-screen-lg m-auto p-10 mt-20 bg-[rgba(0,0,0,0.3)]">
            <div className="leading-5 text-center sm:text-left mb-6 sm:mb-0">
                <NavLink to="/">
                    <span className="font-anton text-[1rem] green">ROBB<span className="text-green-light">PAGE</span></span><br />
                    <span className="font-anton text-[1.29rem] light-green">WEB<span className="text-green-dark">DEV</span></span><br />
                </NavLink>
            </div>
            <div className="footer-socials flex justify-center gap-3 sm:justify-end">
                <a href="https://www.linkedin.com/in/robbpage/"><FetchIcon id="linkedin" /></a>
                <a href="https://www.facebook.com/with2bees"><FetchIcon id="facebook" /></a>
                <a href="https://twitter.com/With2Bees"><FetchIcon id="twitter" /></a>
                <a href="https://www.instagram.com/robb_with2bees/"><FetchIcon id="instagram" /></a>
                <a href="https://github.com/robbpage"><FetchIcon id="github" /></a>
            </div>
        </div>
        </>
    )
}

export default Footer