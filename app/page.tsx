import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Converso - Real-time AI Teaching Platform",
  description: "Create and chat with AI companions to learn any subject.",
};


import { auth } from "@clerk/nextjs/server";
import Dashboard from "@/components/Dashboard";
import LandingPage from "@/components/LandingPage";

const Page = async () => {
  const { userId } = await auth();

  if (userId) {
    return <Dashboard />;
  }

  return <LandingPage />;
}

export default Page