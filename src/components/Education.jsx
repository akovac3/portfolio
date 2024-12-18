export const Education = () => {
    return (
        <div className="grid gap-16 mx-[10%] cursor-default py-40 text-neutral-25 lg:grid-cols-2 md:grid-cols-1">
            <div className="flex flex-col gap-24">
                <p className="text-heading-h5 pb-24">EDUCATION</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-3">
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <img
                            src="/assets/html.png"
                            alt="HTML"
                            class="w-[80px] h-[80px] rounded-full p-8 object-contain bg-neutral-300 bg-opacity-30"
                        />
                        <p>HTML</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <img
                            src="/assets/css-3.png"
                            alt="CSS"
                            class="w-[80px] h-[80px] p-8 rounded-full object-contain bg-neutral-300 bg-opacity-30"
                        />
                        <p>CSS</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <img
                            src="/assets/nodejs.png"
                            alt="NodeJS"
                            class="w-[80px] h-[80px] rounded-full p-8 object-contain bg-neutral-300 bg-opacity-30"
                        />
                        <p>Node.js</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <img
                            src="/assets/react.png"
                            alt="React"
                            class="w-[80px] h-[80px] rounded-full object-cover bg-neutral-300 bg-opacity-30"
                        />
                        <p>React</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <img
                            src="/assets/spring.png"
                            alt="Spring boot"
                            class="w-[80px] h-[80px] rounded-full p-8 object-contain bg-neutral-300 bg-opacity-30"
                        />
                        <p>Spring Boot</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <img
                            src="/assets/tailwind.png"
                            alt="Tailwind"
                            class="w-[80px] h-[80px] rounded-full p-8 object-contain bg-neutral-300 bg-opacity-30"
                        />
                        <p>Tailwind</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <img
                            src="/assets/Mysql_logo.png"
                            alt="My sql"
                            class="w-[80px] h-[80px] rounded-full p-8 object-contain bg-neutral-300 bg-opacity-30"
                        />
                        <p>MySQL</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 py-16">
                        <img
                            src="/assets/postgresql.png"
                            alt="PostgreSQL"
                            class="w-[80px] h-[80px] rounded-full p-8 object-contain bg-neutral-300 bg-opacity-30"
                        />
                        <p>PostgreSQL</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-24 items-center justify-center px-[10%]">
                <div className="flex w-[90%] items-center justify-center gap-12 p-4 bg-gradient-to-r from-blue-800 rounded-8 px-4">
                    <img
                        src="/assets/atlantbh.png"
                        alt="Atlantbh"
                        class="w-[60px] h-[60px]"
                    />
                    <div className="flex flex-col gap-8">
                        <p className="text-heading-h6">Software Development Internship</p>
                        <p>Atlantbh</p>
                        <p className="text-blue-200">Mar, 2024 - Jun, 2024</p>
                    </div>
                </div>
                <div className="flex w-[90%] items-center justify-center gap-12 p-4 bg-gradient-to-r from-blue-800 rounded-8 px-4">
                    <img
                        src="/assets/etf_logo.png"
                        alt="ETF"
                        class="w-[60px] h-[60px]"
                    />
                    <div className="flex flex-col gap-8">
                        <p className="text-heading-h6">I and II cycle in Computing and Informatics</p>
                        <p>Faculty of Electical Engineering Sarajevo</p>
                        <p className="text-blue-200">Oct, 2018 - Oct, 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}