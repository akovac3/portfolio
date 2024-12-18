export const About = () => {
    return (
        <div className="grid gap-16 mx-[10%] text-neutral-25 bg-neutral-900 bg-opacity-50 rounded-12 py-40 z-10 lg:grid-cols-2 md:grid-cols-1">
            <div className="flex items-center justify-center">
                <img
                    src="/assets/full-stack-dev.png"
                    alt="Full-stack dev"
                    class="w-[300px] h-[300px] object-contain"
                />
            </div>
            <div className="flex flex-col gap-24 items-center justify-center px-[10%]">
                <p className="text-heading-h5">ABOUT</p>
                <div className="flex items-center justify-center gap-12 p-4 hover:bg-gradient-to-r hover:from-neutral-500 hover:rounded-12 hover:px-4"> <p className="text-heading-h5">🎓 </p> <p> Recent Master's Graduate in Computing and Informatics from the Faculty of Electrical Engineering, Sarajevo</p>
                </div>
                <div className="flex items-center justify-center gap-12 p-4 hover:bg-gradient-to-r hover:from-neutral-500 hover:rounded-12 hover:px-4"><p className="text-heading-h5">💻 </p> <p>Full-Stack Developer Enthusiast with hands-on experience in building web and mobile applications</p></div>
                <div className="flex items-center justify-center gap-12 p-4 hover:bg-gradient-to-r hover:from-neutral-500 hover:rounded-12 hover:px-4"> <p className="text-heading-h5">⚡</p><p>Skilled in React (frontend) and Spring Boot (backend) for crafting seamless user experiences and robust APIs</p></div>
                <div className="flex items-center justify-center gap-12 p-4 hover:bg-gradient-to-r hover:from-neutral-500 hover:rounded-12 hover:px-4"> <p className="text-heading-h5">🌱 </p> <p>Passionate about learning cutting-edge technologies and delivering impactful solutions </p></div>
            </div>
        </div>
    )
}