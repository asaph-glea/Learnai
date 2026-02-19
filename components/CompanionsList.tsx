import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from 'lucide-react';


interface CompanionsListProps {
    title: string;
    companions?: Companion[];
    classNames?: string;
}

const CompanionsList = ({ title, companions, classNames }: CompanionsListProps) => {
    return (
        <article className={cn('companion-list overflow-hidden', classNames)}>
            <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-2xl md:text-3xl tracking-tight">{title}</h2>
                <Link href="/history" className="text-sm font-semibold text-muted-foreground hover:text-cta-gold transition-colors flex items-center gap-1">
                    View All <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
            <div className="rounded-2xl border border-border overflow-hidden bg-card/50 backdrop-blur-sm">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow className="border-b border-border hover:bg-transparent">
                            <TableHead className="text-muted-foreground font-semibold py-4 pl-6 w-2/3">Lesson</TableHead>
                            <TableHead className="text-muted-foreground font-semibold py-4">Subject</TableHead>
                            <TableHead className="text-muted-foreground font-semibold py-4 pr-6 text-right">Duration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {companions?.map(({ id, subject, name, topic, duration }) => (
                            <TableRow key={id} className="border-b border-border/50 hover:bg-muted/30 transition-colors group cursor-pointer">
                                <TableCell className="py-4 pl-6">
                                    <Link href={`/companions/${id}`} className="block w-full">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 md:size-14 flex flex-shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105 shadow-sm"
                                                style={{ backgroundColor: getSubjectColor(subject) }}>
                                                <Image
                                                    src={`/icons/${subject}.svg`} // Fixed path to include leading slash
                                                    alt={subject}
                                                    width={24}
                                                    height={24}
                                                    className="w-6 h-6 md:w-8 md:h-8 brightness-0 opacity-80"
                                                />
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <p className="font-bold text-lg md:text-xl leading-none group-hover:text-cta-gold transition-colors">
                                                    {name}
                                                </p>
                                                <p className="text-sm text-muted-foreground line-clamp-1">
                                                    {topic}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </TableCell>
                                <TableCell className="py-4">
                                    <div className="badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border capitalize">
                                        <span className="w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: getSubjectColor(subject) }}></span>
                                        {subject}
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 pr-6 text-right">
                                    <div className="flex items-center gap-2 justify-end text-muted-foreground font-medium">
                                        <span>{duration} min</span>
                                        <Image src="/icons/clock.svg" alt="minutes" width={14} height={14} className="opacity-50" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {(!companions || companions.length === 0) && (
                            <TableRow>
                                <TableCell colSpan={3} className="h-24 text-center text-muted-foreground">
                                    No sessions found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </article>
    );
};

export default CompanionsList;
