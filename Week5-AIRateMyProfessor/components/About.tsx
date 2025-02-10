import Statistics from "./Statistics";

const About = () => {
    return (
        <section id="about" className="container py-24 sm:py-32">
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    <img
                        src="./pilot.png"
                        alt="Pilot Image"
                        className="w-[300px] object-contain rounded-lg"
                    />
                    <div className="flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                Rate My Professor AI Assistant
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                Rate My Professor AI Assistant is your go-to
                                tool for navigating the world of academia. Our
                                app leverages advanced AI to analyze professor
                                reviews, helping students make informed
                                decisions about their courses. Whether you are
                                looking for detailed insights, recommendations,
                                or just want to avoid a challenging professor,
                                our AI assistant is here to guide you. Trusted
                                by thousands of students, we are committed to
                                making your academic journey smoother and more
                                successful.
                            </p>
                        </div>

                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
