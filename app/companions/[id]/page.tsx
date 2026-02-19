import React from 'react';
import { redirect } from "next/navigation";
import { getCompanion } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import CompanionComponent from "@/components/CompanionComponent";

interface CompanionSessionProps {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: CompanionSessionProps) {
    const { id } = await params;
    const companion = await getCompanion(id);

    if (!companion) {
        return {
            title: "Companion Not Found",
        };
    }

    return {
        title: `${companion.name} - Converso`,
        description: `Chat with ${companion.name} about ${companion.subject}`,
    };
}

const CompanionSession = async ({ params }: CompanionSessionProps) => {
    const { id } = await params;
    const companion = await getCompanion(id);
    const user = await currentUser();

    const { name, subject, title, topic, duration } = companion;

    if (!user) redirect('/sign-in');
    if (!companion) redirect('/companions');

    console.log(companion);
    return (
        <main className="flex flex-col gap-6 h-full p-6 md:p-10 max-w-7xl mx-auto w-full">
            <article className="flex justify-between items-center p-6 rounded-3xl border border-border bg-card shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-6">
                    <div className="size-20 flex items-center justify-center rounded-2xl shadow-inner border border-white/10 relative overflow-hidden group" style={{ backgroundColor: getSubjectColor(subject) }}>
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={32} height={32} className="drop-shadow-md transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-3">
                            <h1 className="font-bold text-3xl tracking-tight text-foreground">
                                {name}
                            </h1>
                            <div className="subject-badge shadow-sm">
                                {subject}
                            </div>
                        </div>
                        <p className="text-muted-foreground font-medium text-lg line-clamp-1">
                            {topic}
                        </p>
                    </div>
                </div>
                <div className='hidden md:flex flex-col items-end gap-1'>
                    <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-xl border border-border">
                        <Image src="/icons/clock.svg" alt="clock" width={16} height={16} className="opacity-70" />
                        <span className="font-semibold text-sm">{duration} Min Session</span>
                    </div>
                </div>
            </article>

            <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
    );
};

export default CompanionSession;
