import { Button } from "@/components/ui/button";
import { Mic, User, BookOpen, Layers } from "lucide-react";

export const CustomizationShowcase = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t border-border">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="space-y-4 max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Companion, Your Way</h2>
                        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Design the perfect learning partner. From voice to personality, you're in control.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col gap-5">
                        <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400">
                                    <Mic className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Voice</h3>
                                    <p className="text-sm text-muted-foreground">Calm, Energetic, Professional</p>
                                </div>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 w-3/4 rounded-full"></div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2.5 bg-green-500/10 rounded-xl text-green-600 dark:text-green-400">
                                    <User className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Personality</h3>
                                    <p className="text-sm text-muted-foreground">Mentor, Coach, Friend</p>
                                </div>
                            </div>
                            <div className="flex gap-2.5 flex-wrap">
                                <div className="px-4 py-1.5 rounded-full bg-secondary text-xs font-medium">Strict</div>
                                <div className="px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold border border-green-200 dark:border-green-800">Friendly</div>
                                <div className="px-4 py-1.5 rounded-full bg-secondary text-xs font-medium">Funny</div>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400">
                                    <BookOpen className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Subject</h3>
                                    <p className="text-sm text-muted-foreground">Math, History, Coding, Art...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="aspect-video overflow-hidden rounded-3xl border border-border bg-secondary/20 flex items-center justify-center relative shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-cta-gold/5 to-secondary/50"></div>

                            {/* Decorative circles */}
                            <div className="absolute top-10 right-10 w-24 h-24 bg-cta-gold/10 rounded-full blur-2xl" />
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

                            <div className="text-center z-10 p-8 w-full max-w-sm bg-background/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg mx-4">
                                <div className="w-24 h-24 bg-gradient-to-tr from-cta to-black dark:from-white dark:to-gray-300 rounded-2xl mx-auto mb-5 flex items-center justify-center text-white dark:text-black text-4xl font-bold shadow-lg">
                                    A
                                </div>
                                <h3 className="text-2xl font-bold mb-1">Alex</h3>
                                <p className="text-muted-foreground font-medium mb-4">Your History Tutor</p>
                                <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold bg-green-500/10 text-green-600 border border-green-500/20">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                                    Active Now
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-muted-foreground italic font-medium">
                            "Your companion learns how you learn."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
