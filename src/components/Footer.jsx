import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
    return (
        <div className="px-[10%] py-40 text-neutral-300 bg-blue-900 bg-opacity-50 grid gap-36 lg:grid-cols-2 md:grid-cols-1">
            <div className="flex flex-col gap-24">
                <p className="text-heading-h3">Contact</p>
                <p className="text-heading-h5 font-normal">Feel free to reach out!</p>
            </div>
            <div className="flex flex-col gap-24 text-xl">
                <div className="flex items-center justify-start gap-12">
                    <FontAwesomeIcon icon={ faEnvelope } />
                    <a href="mailto:adna.fejzic33@gmail.com">adna.fejzic33@gmail.com</a>
                </div>
                <div className="flex items-center justify-start gap-12">
                    <FontAwesomeIcon icon={ faLinkedin } />
                    <a href="https://www.linkedin.com/in/adna-fejzic/">linkedin.com/adna-fejzic</a>
                </div>
                <div className="flex items-center justify-start gap-12">
                    <FontAwesomeIcon icon={ faGithub } />
                    <a href="https://github.com/akovac3">github.com/akovac3</a>
                </div>
            </div>
        </div>
    )
}