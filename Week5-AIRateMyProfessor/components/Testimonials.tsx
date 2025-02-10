import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
}

const testimonials: TestimonialProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe",
        userName: "@john_Doe",
        comment: "This app is awesome!",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe 1",
        userName: "@john_Doe1",
        comment:
            "The AI UI is amazing.",
    },

    {
        image: "https://github.com/shadcn.png",
        name: "John Doe 2",
        userName: "@john_Doe2",
        comment:
            "I love the blah, blah, blah.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe 3",
        userName: "@john_Doe3",
        comment:
            "This deserves a 5 star rating because of blah, blah, blah.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe 4",
        userName: "@john_Doe4",
        comment:
            "Blah, blah, blah.",
    },
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe 5",
        userName: "@john_Doe5",
        comment:
            "Hey man!!! Blah, blah, black sheep.",
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold">
                Discover Why
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    People Love{" "}
                </span>
                Rate My Professor AI Assistant
            </h2>

            <p className="text-xl text-muted-foreground pt-4 pb-8">
                Join thousands of satisfied students who trust our AI-powered
                platform to guide their academic choices. From insightful
                professor reviews to personalized course recommendations,
                discover why Rate My Professor AI Assistant has become an
                essential tool for making informed decisions in the classroom.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                {testimonials.map(
                    ({ image, name, userName, comment }: TestimonialProps) => (
                        <Card
                            key={userName}
                            className="max-w-md md:break-inside-avoid overflow-hidden"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar>
                                    <AvatarImage alt="" src={image} />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                    <CardTitle className="text-lg">
                                        {name}
                                    </CardTitle>
                                    <CardDescription>
                                        {userName}
                                    </CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent>{comment}</CardContent>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};

export default Testimonials;
