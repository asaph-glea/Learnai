import React from 'react';

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const Cta = () => {
    return (
        <section className="cta-section mx-auto">
            <div className="cta-badge uppercase tracking-wider text-xs font-bold">Start Learning your Way</div>
            <h2 className="text-3xl font-bold leading-tight">
                Build and Personalize a Learning Companion
            </h2>
            <p className="text-white/80 font-medium">Pick a voice, name, subject and personality and start learning
                through conversations with your companion.
                <br className="mt-2" />
                <span className="text-cta-gold font-bold">Fun learning with Learnai.</span>
            </p>
            <div className="relative w-full h-[200px] my-4">
                <Image src="/images/cta.svg" alt="cta" fill className="object-contain" />
            </div>

            <Link href="/companions/new" className="w-full">
                <button className="btn-gold w-full justify-center group">
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    <span>Build a new Companion</span>
                </button>
            </Link>
        </section>
    );
};

export default Cta;
