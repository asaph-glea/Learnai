import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { WhyLearnai } from "@/components/landing/WhyLearnai";
import { Footer } from "@/components/landing/Footer";
import { CustomizationShowcase } from "@/components/landing/CustomizationShowcase";
import { TargetAudience } from "@/components/landing/TargetAudience";

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <HowItWorks />
            <Features />
            <CustomizationShowcase />
            <TargetAudience />
            <WhyLearnai />
            <Footer />
        </div>
    );
};

export default LandingPage;
