import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export const WhyLearnai = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20 border-t border-border relative overflow-hidden">
            {/* Background noise/grain if desired, or just clean style */}

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <div className="inline-block rounded-full bg-cta-gold/10 px-3 py-1 text-sm font-medium text-cta-gold border border-cta-gold/20">
                            Conversational Learning
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl leading-tight">
                            Learning Works Better When It Feels Like a <span className="text-cta-gold">Conversation</span>
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
                            Learnai turns learning into a dialogue—not a lecture. By talking with a companion that understands you, learning becomes easier, faster, and more enjoyable.
                        </p>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row pt-4">
                            <Link href="/sign-up">
                                <Button className="bg-cta hover:bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 rounded-full h-12 px-6 text-base shadow-lg hover:shadow-xl transition-all">
                                    Start Learning Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-gradient-to-tr from-cta-gold/20 to-secondary/50 flex items-center justify-center p-8 backdrop-blur-sm">
                            {/* Animated rings */}
                            <div className="absolute inset-0 rounded-full border border-cta-gold/30 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-4 rounded-full border border-cta-gold/20 animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-8 rounded-full border border-dashed border-cta-gold/10 animate-[spin_20s_linear_infinite]" />

                            {/* Floating icons */}
                            <div className="absolute top-1/4 left-0 p-3 bg-card rounded-2xl shadow-lg animate-bounce duration-1000">
                                <MessageCircle className="w-6 h-6 text-cta-gold" />
                            </div>

                            <div className="text-center space-y-3 relative z-10 p-8 bg-card/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl max-w-xs transform hover:scale-105 transition-transform">
                                <h3 className="text-2xl font-bold text-foreground">Just Ask.</h3>
                                <p className="text-cta-gold font-medium italic">"Hey, can you explain quantum physics like I'm 5?"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
