import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav className="bg-blue-950 relative flex lg:flex-row md:flex-col md:items-start lg:items-center justify-between pt-40 z-20 m-0 px-[10%]">
            <a className="text-heading-h3 font-bold no-underline text-neutral-0" href="/">Portfolio</a>
            <div className="flex md:absolute md:right-0 md:mr-[10%] md:flex-col md:items-end md:gap-10 md:z-30">
                { !menuOpen ? <FontAwesomeIcon className="text-neutral-0 lg:hidden md:block md:cursor-pointer" icon={ faBars } onClick={ () => setMenuOpen(!menuOpen) } /> : <FontAwesomeIcon className="text-neutral-0 lg:hidden md:block md:cursor-pointer" icon={ faX } onClick={ () => setMenuOpen(!menuOpen) } /> }
                <ul className={ `lg:flex ${menuOpen ? `md:flex md:z-1` : "md:hidden"} items-center lg:flex-row md:flex-col lg:gap-[47px] md:gap-[13px] md:rounded-12 lg:bg-none lg:p-0 md:bg-gradient-to-br md:from-blue-400 md:p-6 list-none text-lg text-neutral-0 no-underline` } onClick={ () => setMenuOpen(!menuOpen) }>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}