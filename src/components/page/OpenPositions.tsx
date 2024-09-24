export default function OpenPositions() {
    return (
        <section className="mt-32 md:mt-[-300px] relative z-20">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-header-subtitle">
                        Join the team
                    </h2>
                    <h3 className="section-header-heading max-w-[620px] mx-auto">
                        Open positions
                    </h3>
                </div>

                <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,400px))] justify-center gap-10 mt-6 md:mt-20">
                    <div className="flex flex-col items-start bg-[#171d22] border border-[#363b3f] grow p-6 cursor-pointer hover:translate-y-[-20px] transition-transform duration-300 ease-in-out">
                        <h3 className="text-2xl font-medium">
                            Mid-Level Front-end Developer
                        </h3>
                        <p className="text-lg mt-5 mb-10 text-light-gray">
                            You are responsible for building the ‘client-side’ of our web applications by translating both customer needs and designed mock-ups into functional and appealing, fully responsive, optimal applications.
                        </p>

                        <button className="inline-flex justify-center items-center text-primary hover:text-[#4747d7] gap-3 transition duration-300 ease-in-out">
                            Apply
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path></svg>
                        </button>
                    </div>

                    <div className="flex flex-col items-start bg-dark border border-[#363b3f] grow p-6 cursor-pointer hover:translate-y-[-20px] transition-transform duration-300 ease-in-out">
                        <h3 className="text-2xl font-medium">
                            Nothing fitting for you here?
                        </h3>
                        <p className="text-lg mt-5 mb-10 grow text-light-gray">
                            Go ahead and self-apply. You never know!
                        </p>

                        <button className="inline-flex justify-center items-center text-primary hover:text-[#4747d7] gap-3 transition duration-300 ease-in-out">
                            Contact Us
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
