import { Briefcase, GraduationCap, Lightbulb, Users } from "lucide-react";

export const TargetAudience = () => {
    const audiences = [
        {
            icon: GraduationCap,
            title: "Students",
            description: "Ace your exams and understand complex topics deeply.",
        },
        {
            icon: Briefcase,
            title: "Professionals",
            description: "Upskill rapidly and stay ahead in your career.",
        },
        {
            icon: Lightbulb,
            title: "Lifelong Learners",
            description: "Explore new interests just for the joy of learning.",
        },
        {
            icon: Users,
            title: "Self-Paced Learners",
            description: "Learn on your own schedule, without the pressure.",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who Uses Learnai?</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Designed for anyone with a curiosity to learn.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4">
                    {audiences.map((item, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 hover:border-cta-gold/30">
                            <div className="p-3.5 rounded-xl bg-cta/5 text-cta dark:text-white dark:bg-white/10 mb-2">
                                <item.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground text-center leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
