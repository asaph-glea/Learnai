import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cta-gold/10 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cta/5 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-screen" />
            </div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center space-y-8 text-center">
                    <div className="space-y-4 max-w-4xl">
                        <div className="inline-flex items-center rounded-full border border-cta-gold/30 bg-cta-gold/10 px-3 py-1 text-sm font-medium text-cta-gold backdrop-blur-sm mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-cta-gold mr-2 animate-pulse"></span>
                            New: AI Voice Companions
                        </div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                            Learn Anything Through <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta-gold to-yellow-600 dark:to-yellow-300">
                                Conversations That Feel Personal
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl leading-relaxed">
                            Create your own AI learning companion. Choose a voice, name, subject, and personality—and start learning naturally through conversation.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <Link href="/sign-up">
                            <Button className="h-14 px-8 text-lg rounded-full bg-cta hover:bg-black text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                                Create Your Companion <Sparkles className="ml-2 h-5 w-5 text-cta-gold" />
                            </Button>
                        </Link>
                        <Link href="#how-it-works">
                            <Button variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-border hover:border-cta-gold/50 bg-background hover:bg-secondary transition-all">
                                See How It Works
                            </Button>
                        </Link>
                    </div>

                    {/* Visual cue for scrolling */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hidden xl:block">
                        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-transparent via-muted-foreground to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
