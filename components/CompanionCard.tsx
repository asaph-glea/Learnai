import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
    return (
        <article
            className="companion-card group relative p-6 h-[280px] flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-card/50"
            style={{
                borderColor: color,
                // @ts-ignore
                "--card-color": color
            }}
        >
            {/* Ambient Glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at top right, ${color}, transparent 70%)`
                }}
            />

            <div className="flex justify-between items-start z-10">
                <div
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-white/90 dark:bg-white/10 dark:text-white backdrop-blur-md shadow-sm border border-black/5"
                >
                    {subject}
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors backdrop-blur-sm">
                    <Image src="/icons/bookmark.svg" alt="bookmark" width={10} height={12} className="opacity-70" />
                </button>
            </div>

            <div className="z-10 flex-grow flex flex-col justify-center gap-2 mt-4">
                <h2 className="text-2xl font-bold leading-tight line-clamp-2 group-hover:text-glow transition-all" style={{ color: 'var(--foreground)' }}>
                    {name}
                </h2>
                <p className="text-muted-foreground text-sm line-clamp-2 font-medium">
                    {topic}
                </p>
            </div>

            <div className="flex items-end justify-between z-10 mt-4">
                <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-2 py-1 rounded-lg">
                    <Image src="/icons/clock.svg" alt="duration" width={14} height={14} className="opacity-70" />
                    <p className="text-xs font-semibold">{duration} min</p>
                </div>

                <Link href={`/companions/${id}`}>
                    <button
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform group-hover:scale-110"
                        style={{ backgroundColor: color }}
                    >
                        <ArrowUpRight className="w-5 h-5 text-black" />
                    </button>
                </Link>
            </div>
        </article>
    );
};

export default CompanionCard;
