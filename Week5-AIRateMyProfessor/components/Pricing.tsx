import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

enum PopularPlanType {
    NO = 0,
    YES = 1,
}

interface PricingProps {
    title: string;
    popular: PopularPlanType;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

const pricingList: PricingProps[] = [
    {
        title: "Free",
        popular: 0,
        price: 0,
        description:
            "Perfect for students looking to get started with basic features.",
        buttonText: "Get Started",
        benefitList: [
            "Access to basic professor ratings",
            "Search and filter by course or professor",
            "Limited access to AI-generated insights",
            "Community support",
            "Email notifications for new reviews",
        ],
    },
    {
        title: "Premium",
        popular: 1,
        price: 5,
        description:
            "Ideal for students who want more detailed insights and additional features.",
        buttonText: "Start Free Trial",
        benefitList: [
            "Everything in Free, plus:",
            "Advanced AI-powered professor insights",
            "Personalized course recommendations",
            "Unlimited access to review analytics",
            "Early access to new features",
        ],
    },
    {
        title: "Enterprise",
        popular: 0,
        price: 40,
        description:
            "Best for institutions or organizations looking for comprehensive access to all features.",
        buttonText: "Register with Us",
        benefitList: [
            "Everything in Premium, plus:",
            "Multi-user access with team management",
            "Detailed reporting and analytics",
            "Custom AI model training for specific needs",
            "24/7 priority support",
        ],
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="container py-24 sm:py-32">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Get
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    {" "}
                    Unlimited{" "}
                </span>
                Access
            </h2>
            <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
                Choose the plan that best suits your needs and unlock the full
                potential of Rate My Professor AI Assistant.
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pricingList.map((pricing: PricingProps) => (
                    <Card
                        key={pricing.title}
                        className={
                            pricing.popular === PopularPlanType.YES
                                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                                : ""
                        }
                    >
                        <CardHeader>
                            <CardTitle className="flex item-center justify-between">
                                {pricing.title}
                                {pricing.popular === PopularPlanType.YES ? (
                                    <Badge
                                        variant="secondary"
                                        className="text-sm text-primary"
                                    >
                                        Most popular
                                    </Badge>
                                ) : null}
                            </CardTitle>
                            <div>
                                <span className="text-3xl font-bold">
                                    ${pricing.price}
                                </span>
                                <span className="text-muted-foreground">
                                    {" "}
                                    /month
                                </span>
                            </div>

                            <CardDescription>
                                {pricing.description}
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <Button className="w-full">
                                {pricing.buttonText}
                            </Button>
                        </CardContent>

                        <hr className="w-4/5 m-auto mb-4" />

                        <CardFooter className="flex">
                            <div className="space-y-4">
                                {pricing.benefitList.map((benefit: string) => (
                                    <span key={benefit} className="flex">
                                        <Check className="text-green-500" />{" "}
                                        <h3 className="ml-2">{benefit}</h3>
                                    </span>
                                ))}
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
