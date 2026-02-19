import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import { getPopularCompanions, getRecentSessions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Dashboard = async () => {

    const companions = await getPopularCompanions();
    const recentSessionCompanions = await getRecentSessions(10);

    return (
        <main className="animate-fade-in pb-20">
            <section className="flex flex-col gap-6 w-full">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Popular Companions</h1>
                </div>

                <div className="companions-grid">
                    {companions.map((companion) => (
                        <CompanionCard
                            key={companion.id}
                            {...companion}
                            color={getSubjectColor(companion.subject)}
                        />
                    ))}
                </div>
            </section>

            <section className="home-section mt-12">
                <CompanionsList
                    title="Recently Completed Sessions"
                    companions={recentSessionCompanions}
                    classNames="w-full lg:w-2/3 transition-all hover:shadow-lg"
                />
                <div className="w-full lg:w-1/3 flex flex-col">
                    <Cta />
                </div>
            </section>
        </main>
    )
}

export default Dashboard
