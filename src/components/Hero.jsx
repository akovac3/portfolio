export const Hero = () => {
    return (
        <div className="mx-[10%] py-20 grid md:grid-cols-1 lg:grid-cols-2 gap-[10%]">
            <div className="flex flex-col gap-10">
                <p className="text-neutral-0 text-heading-h3">Hi, I'm Adna </p>
                <p className="text-neutral-200 text-lg"> A full-stack developer skilled in React and Spring Boot, passionate about creating impactful, user-friendly applications. Let's connect!</p>
                <a className="text-blue-950 bg-neutral-300 text-heading-h6 rounded-16 w-fit py-8 px-16" href="mailto:adna.fejzic33@gmail.com">Contact Me</a>
            </div>
            <div className="flex justify-center items-center">
                <img
                    src="/assets/my_photo.jpg"
                    alt="Adna Fejzic"
                    class="w-[300px] h-[300px] rounded-full object-contain bg-neutral-300 border-4 border-gray-300 shadow-lg"
                />
            </div>
        </div>
    )
}