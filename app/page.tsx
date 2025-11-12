import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
      <main>
        <h1 className="text-2xl">Popular Companions</h1>
          <section className="home-section">
              <CompanionCard
              id="123"
              name = "Brain Network"
              topic = "Neuro"
              subject = "Biology"
              duration = {45}
              color = "#ffda6e"
              />
              <CompanionCard
                  id="124"
                  name = "Intergtation"
                  topic = "Calculus"
                  subject = "Maths"
                  duration = {35}
                  color = "#e5d0ff"
              />
              <CompanionCard
                  id="125"
                  name = "German"
                  topic = "Language"
                  subject = "Elective"
                  duration = {15}
                  color = "#BDE7FF"
              />

          </section>

        <section className="home-section">
            <CompanionsList
            title = "Recently Completed Sessions"
            companions = {recentSessions}
            classNames = "w-2/3 max-lg:w-full"
            />
            <Cta/>
        </section>
      </main>

  )
}

export default Page