import { BookOpen, Mic, Settings, TrendingUp } from "lucide-react";

export const HowItWorks = () => {
    const steps = [
        {
            icon: BookOpen,
            title: "Pick Your Subject",
            description: "Learn math, coding, languages, science, history, or any topic you want.",
        },
        {
            icon: Settings,
            title: "Customize Your Companion",
            description: "Choose a name, voice, tone, and personality—strict tutor, friendly mentor, or fun coach.",
        },
        {
            icon: Mic,
            title: "Start Conversing",
            description: "Learn by asking questions, having discussions, and practicing in real-time conversations.",
        },
        {
            icon: TrendingUp,
            title: "Grow at Your Pace",
            description: "Your companion adapts to your level, speed, and learning style.",
        },
    ];

    return (
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-background relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cta-gold/5 blur-3xl -z-10 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-4 max-w-3xl">
                        <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-muted-foreground border border-border">
                            Simple Process
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Learnai Works</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Your journey to mastering any subject in 4 simple steps.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-4 lg:gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center space-y-4 text-center group h-full justify-between p-4 rounded-2xl hover:bg-secondary/20 transition-colors">
                            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cta text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-cta-gold/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <step.icon className="h-10 w-10 relative z-10" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-8 border-t-2 border-dashed border-border -mr-12" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
