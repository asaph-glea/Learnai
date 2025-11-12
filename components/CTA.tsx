import React from 'react';

import Image from "next/image";
import Link from "next/link";

const Cta = () => {
    return (
        <section className="cta-section">
            <div className="cta-badge"> Start Learning your Way</div>
            <h2 className="text-3xl font-bold">
                Build and Personalize a Learning Companion
            </h2>
            <p>Pick a voice, name, subject and personality and start learning
                 through conversations with your companion.
                <br/>
                Fun learning with Learnai.
            </p>
            < Image src="images/cta.svg" alt="cta" width={360} height={260} />
            <button className="btn-primary">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12}/>
                <Link href="/companions/new">
                    <p>Build a new Companions </p>
                </Link>
            </button>
        </section>
    );
};

export default Cta;
