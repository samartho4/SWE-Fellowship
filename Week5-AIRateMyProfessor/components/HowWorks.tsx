import { Icons } from "./Icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const features: FeatureProps[] = [
    {
        icon: (
            <Icons.accessibility className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Accesibility",
        description:
            "Our app is designed to be user-friendly and accessible to everyone. Whether you're on a mobile device or a desktop, you'll have seamless access to professor ratings and course insights anytime, anywhere",
    },
    {
        icon: (
            <Icons.people className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Community",
        description:
            "Join a thriving community of students who share honest feedback about their professors. Engage with reviews, ask questions, and contribute your own experiences to help others make informed decisions",
    },
    {
        icon: (
            <Icons.scale className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Scalability",
        description:
            "Rate My Professor AI Assistant grows with you. As our user base expands, our AI algorithms continuously improve, providing you with more accurate and personalized recommendations based on an ever-increasing pool of data",
    },
    {
        icon: (
            <Icons.gamification className="dark:text-orange-500 text-blue-500 w-7 h-7" />
        ),
        title: "Gamification",
        description:
            "Learning is more fun with our gamified features! Earn badges, compete with peers, and stay motivated as you contribute reviews and interact with the community. Turn your academic journey into a rewarding experience",
    },
];

const HowWorks = () => {
    return (
        <section
            id="howItWorks"
            className="container text-center py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold ">
                How{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Rate My Professor AI Assistant{" "}
                </span>
                Works
            </h2>
            <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
                Explore the features that make our app a must-have for students!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map(({ icon, title, description }: FeatureProps) => (
                    <Card key={title} className="bg-muted/50">
                        <CardHeader>
                            <CardTitle className="grid gap-4 place-items-center">
                                {icon}
                                {title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>{description}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default HowWorks;
