import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "What is Rate My Professor AI Assistant all about?",
        answer: "Rate My Professor AI Assistant is a tool that uses AI to analyze and provide insights into professor reviews, helping students make informed decisions about their courses.",
        value: "item-1",
    },
    {
        question: "How do I create an account?",
        answer: "You can create an account by clicking on the Sign Up button on our homepage and following the registration steps. You'll need an active email address or social media account to get started.",
        value: "item-2",
    },
    {
        question:
            "Is the basic version of the app free?",
        answer: "Yes, our basic plan is free and includes access to essential features like professor ratings, course searches, and limited AI insights.",
        value: "item-3",
    },
    {
        question: "What do I get with a Premium subscription?",
        answer: "A Premium subscription offers advanced features such as unlimited access to AI-powered insights, personalized course recommendations, and priority support.",
        value: "item-4",
    },
    {
        question:
            "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time through your account settings. Your access to Premium features will remain until the end of your current billing cycle.",
        value: "item-5",
    },
];

const FAQ = () => {
    return (
        <section id="faq" className="container pt-24 sm:pt-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    Questions
                </span>
            </h2>

            <Accordion
                type="single"
                collapsible
                className="w-full AccordionRoot"
            >
                {FAQList.map(({ question, answer, value }: FAQProps) => (
                    <AccordionItem key={value} value={value}>
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            <h3 className="font-medium mt-4">
                Still have questions?{" "}
                <a
                    href="mailto:shongwe.bhekizwe@gmail.com"
                    className="text-primary border-primary border-b-2 hover:border-0"
                >
                    Contact us
                </a>
            </h3>
        </section>
    );
};

export default FAQ;
