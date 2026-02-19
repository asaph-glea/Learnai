import { BrainCircuit, MessageSquare, Mic2, ShieldCheck, UserCheck } from "lucide-react";

export const Features = () => {
    const features = [
        {
            icon: UserCheck,
            title: "Personalized AI Companions",
            description: "Each learner gets a companion designed just for them.",
        },
        {
            icon: Mic2,
            title: "Voice & Text Conversations",
            description: "Learn by talking or typing—anytime, anywhere.",
        },
        {
            icon: BrainCircuit,
            title: "Adaptive Learning",
            description: "The companion remembers progress and adjusts explanations.",
        },
        {
            icon: ShieldCheck,
            title: "Natural, Judgment-Free Learning",
            description: "Ask anything without fear—learn comfortably.",
        },
    ];

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30 relative">
            {/* Diagonal divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="fill-background"></path>
                </svg>
            </div>

            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="space-y-4 max-w-3xl">
                        <div className="inline-block rounded-full bg-cta/5 px-4 py-1.5 text-sm font-semibold text-cta dark:text-white border border-cta/10">
                            Key Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Learn Better</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Powerful features designed to make learning effective, engaging, and fun.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-start gap-6 lg:gap-8 py-4 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-5 rounded-3xl border border-border p-8 bg-card shadow-sm hover:shadow-xl hover:border-cta-gold/30 transition-all duration-300 group">
                            <div className="mt-1 bg-cta-gold/10 p-3 rounded-2xl text-cta-gold group-hover:bg-cta-gold group-hover:text-black transition-colors">
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-xl font-bold group-hover:text-cta-gold transition-colors">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
