import { buttonVariants } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Icons } from "./Icons";

interface TeamProps {
    imageUrl: string;
    name: string;
    position: string;
    socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
    name: string;
    url: string;
}

const teamList: TeamProps[] = [
    {
        imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHzZyxCao64vA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687957091647?e=1730332800&v=beta&t=CIMK0Xix-eiNQUOunyfxlZjgpo0ZoIKK4f8q0pzdDoU",
        name: "Boniface Munga",
        position: "Tech Lead",
        socialNetworks: [
            { name: "Linkedin", url: "https://www.linkedin.com/in/boniface-munga-software-engineer" },
            {
                name: "Github",
                url: "https://github.com/",
            },
            {
                name: "Twitter",
                url: "https://x.com/",
            },
        ],
    },
    {
        imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEAh49Veb_-vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1691688973647?e=1730332800&v=beta&t=YqglArp38JsVHJFGwRUZCEQjUHMJFFAeu0w5YG5f5zc",
        name: "Salman Qurban",
        position: "Backend Developer",
        socialNetworks: [
            { name: "Linkedin", url: "https://www.linkedin.com/in/salman-q-3u6/" },
            {
                name: "Github",
                url: "https://github.com/",
            },
            {
                name: "Twitter",
                url: "https://x.com/",
            },
        ],
    },
    {
        imageUrl: "https://avatars.githubusercontent.com/u/126109055?v=4",
        name: "Ernest Shongwe",
        position: "Frontend Developer",
        socialNetworks: [
            { name: "Linkedin", url: "https://www.linkedin.com/in/ernest-shongwe/" },
            {
                name: "Github",
                url: "https://github.com/bshongwe",
            },
            {
                name: "Twitter",
                url: "https://x.com/ernest_b_shong",
            },
        ],
    },
    {
        imageUrl: "https://i.pravatar.cc/150?img=17",
        name: "Bruce Rogers",
        position: "DevOps Engineer",
        socialNetworks: [
            { name: "Linkedin", url: "https://linkedin.com" },
            {
                name: "Github",
                url: "https://github.com/",
            },
            {
                name: "Twitter",
                url: "https://x.com/",
            },
        ],
    },
];

const Team = () => {
    const socialIcon = (iconName: string) => {
        switch (iconName) {
            case "Linkedin":
                return <Icons.linkedin size="20" />;

            case "Github":
                return <Icons.github size="20" />;

            case "Twitter":
                return <Icons.twitter size="20" />;
        }
    };

    return (
        <section id="team" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Rate My Professor{" "}
                </span>
                AI Assistant
            </h2>

            <p className="mt-4 mb-10 text-xl text-muted-foreground">
                <i>Development team</i>
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
                {teamList.map(
                    ({
                        imageUrl,
                        name,
                        position,
                        socialNetworks,
                    }: TeamProps) => (
                        <Card
                            key={name}
                            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
                        >
                            <CardHeader className="mt-8 flex justify-center items-center pb-2">
                                <img
                                    src={imageUrl}
                                    alt={`${name} ${position}`}
                                    className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                                />
                                <CardTitle className="text-center">
                                    {name}
                                </CardTitle>
                                <CardDescription className="text-primary">
                                    {position}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="text-center pb-2">
                                <p>
                                    We built an amazing product just for you.
                                    Reach out to us... today!
                                </p>
                            </CardContent>

                            <CardFooter>
                                {socialNetworks.map(
                                    ({ name, url }: SociaNetworkslProps) => (
                                        <div key={name} className="space-x-2">
                                            <a
                                                href={url}
                                                target="_blank"
                                                className={buttonVariants({
                                                    variant: "ghost",
                                                    size: "sm",
                                                })}
                                            >
                                                <span className="sr-only">
                                                    {name} icon
                                                </span>
                                                {socialIcon(name)}
                                            </a>
                                        </div>
                                    )
                                )}
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};

export default Team;
