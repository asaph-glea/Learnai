import React from 'react';
import { PricingTable } from "@clerk/nextjs";

const Subscription = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-6 md:p-10 space-y-10">
            <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Start Your Learning Journey
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Choose the plan that fits your learning needs. Access unlimited companions and personalized sessions.
                </p>
            </div>
            <div className="py-8">
                <PricingTable />
            </div>
        </div>
    );
};

export default Subscription;
