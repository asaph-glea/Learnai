import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserCompanions, getUserSessions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import CompanionsList from "@/components/CompanionsList";
const Profile = async () => {

    const user = await currentUser();

    if (!user) redirect('/sign-in');

    const companions = await getUserCompanions(user.id);
    const sessionHistory = await getUserSessions(user.id);

    return (
        <main className="w-full max-w-7xl mx-auto p-6 md:p-10 space-y-10">
            {/* Header Section */}
            <section className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 rounded-3xl bg-secondary/20 border border-border shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-center text-center md:text-left">
                    <div className="relative group">
                        <div className="absolute -inset-1 rounded-full bg-cta-gold opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
                        <Image
                            src={user.imageUrl}
                            alt={user.firstName!}
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-background relative z-10 shadow-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-3xl md:text-4xl text-foreground">
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className="text-muted-foreground font-medium">
                            {user.emailAddresses[0].emailAddress}
                        </p>
                        <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cta-gold/10 border border-cta-gold/20 text-cta-gold text-sm font-bold w-fit mx-auto md:mx-0">
                            Learner
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="flex gap-4 md:gap-6 w-full md:w-auto">
                    <div className="flex-1 md:flex-initial flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-sm min-w-[140px] hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-1">
                            {/* Icon placeholder or use Lucide if imported */}
                            <p className="text-3xl font-bold">{sessionHistory.length}</p>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">Lessons Completed</span>
                    </div>
                    <div className="flex-1 md:flex-initial flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-sm min-w-[140px] hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-2 mb-1">
                            <p className="text-3xl font-bold">{companions.length}</p>
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">Companions Created</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <div className="space-y-6">
                <Accordion type="multiple" defaultValue={["recent", "companions"]} className="w-full space-y-4">
                    <AccordionItem value="recent" className="border-none">
                        <AccordionTrigger className="text-xl md:text-2xl font-bold px-6 py-4 rounded-2xl hover:bg-secondary/30 transition-colors [&[data-state=open]]:bg-secondary/20 [&[data-state=open]]:rounded-b-none">
                            Recent Sessions
                        </AccordionTrigger>
                        <AccordionContent className="p-0 pt-4">
                            <div className="p-1">
                                <CompanionsList
                                    title=""
                                    companions={sessionHistory}
                                />
                                {sessionHistory.length === 0 && (
                                    <div className="text-center py-10 text-muted-foreground">
                                        No active sessions yet. Start learning!
                                    </div>
                                )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="companions" className="border-none">
                        <AccordionTrigger className="text-xl md:text-2xl font-bold px-6 py-4 rounded-2xl hover:bg-secondary/30 transition-colors [&[data-state=open]]:bg-secondary/20 [&[data-state=open]]:rounded-b-none">
                            My Companions {`(${companions.length})`}
                        </AccordionTrigger>
                        <AccordionContent className="p-0 pt-4">
                            <div className="p-1">
                                <CompanionsList title="" companions={companions} />
                                {companions.length === 0 && (
                                    <div className="text-center py-10 text-muted-foreground">
                                        You haven't created any companions yet.
                                    </div>
                                )}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </main>
    );
};

export default Profile;
