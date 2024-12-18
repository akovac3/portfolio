export const Projects = () => {
    return (
        <div className="mx-[10%] cursor-default pb-80 text-neutral-25">
            <div className="flex flex-col gap-24">
                <p className="text-heading-h5 pb-24">PROJECTS</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
                    <div className="flex flex-col gap-8 rounded-8 p-16 bg-gradient-to-b from-blue-800 to-neutral-900">
                        <img
                            src="/assets/todo.png"
                            alt="To do"
                            class="h-[230px] rounded-8 m-4 object-cover"
                        />
                        <p className="text-heading-h6">Todo App</p>
                        <p>A basic application built for managing Todo tasks.</p>
                        <p className="text-blue-200">Go + React</p>
                        <div className="flex items-center justify-center">
                            <a className="py-4 px-16 bg-blue-800 bg-opacity-70 w-fit rounded-12 font-bold" href="https://github.com/akovac3/to-do-list" >Source</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 rounded-8 p-16 bg-gradient-to-b from-blue-800 to-neutral-900">
                        <img
                            src="/assets/cinebh.png"
                            alt="Cinebh"
                            class="h-[230px] rounded-8 m-4 object-fill"
                        />
                        <p className="text-heading-h6">Cinebh</p>
                        <p>An app for booking movie tickets at cinemas across Bosnia and Herzegovina.</p>
                        <p className="text-blue-200">Spring boot + React</p>
                        <div className="flex items-center justify-center">
                            <a className="py-4 px-16 bg-blue-800 bg-opacity-70 w-fit rounded-12 font-bold" href="https://github.com/akovac3/cinebh" >Source</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 rounded-8 p-16 bg-gradient-to-b from-blue-800 to-neutral-900">
                        <img
                            src="/assets/moviehub.png"
                            alt="MovieHub"
                            class="h-[230px] rounded-8 m-4 object-cover"
                        />
                        <p className="text-heading-h6">MovieHub</p>
                        <p>An application for exploring movies and managing a personalized watchlist of favorites.</p>
                        <p className="text-blue-200">Spring boot + React</p>
                        <div className="flex items-center justify-center">
                            <a className="py-4 px-16 bg-blue-800 bg-opacity-70 w-fit rounded-12 font-bold" href="https://github.com/akovac3/MovieHub" >Source</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 rounded-8 p-16 bg-gradient-to-b from-blue-800 to-neutral-900">
                        <img
                            src="/assets/BiljkaID.jpg"
                            alt="BiljkaID"
                            class="h-[230px] rounded-8 m-4 object-contain"
                        />
                        <p className="text-heading-h6">BiljkaID</p>
                        <p>A mobile application for plant recognition powered by the MobileNetV2 deep learning model.</p>
                        <p className="text-blue-200">Typescript + React Native</p>
                        <div className="flex items-center justify-center">
                            <a className="py-4 px-16 bg-blue-800 bg-opacity-70 w-fit rounded-12 font-bold" href="https://github.com/akovac3/plant-identification-a" >Source</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}