"use client";

import QuoteTool from "@/app/components/quoteTool/QuoteTool";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import { methodologies } from "@/app/stubs/methodologies";
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import { industries } from "@/app/stubs/industries";
import SkillGrid from "@/app/components/skillGrid/SkillGrid";
import { techSkills } from "@/app/stubs/techSkills";
import TwoColumnContainer from "@/app/components/layout/TwoColumnContainer";
import {softSkills} from "@/app/stubs/softSkills";
import SkillCards from "@/app/components/skillCards/SkillCards";
import Title from "@/app/components/title/Title";
import Recommendations from "@/app/components/recommendations/Recommendations";
import {recommendations} from "@/app/stubs/recommendations";

export default function Home() {
    return (
        <div>
            <header><h1>Header</h1></header>
            <nav>Sticky Nav</nav>
            <p>"As a Senior Front End Developer with over 20 years of commercial
                experience in UI development, I bring a wealth of expertise and a
                diverse skill set. My extensive experience spans numerous big-name
                industries, including telecommunications, e-commerce, digital
                agencies, finance, gambling, retail, and more."</p>
            <Recommendations recommendations={recommendations} />

            <Title text="Tech Skills by Years Experience" />
            <SkillGrid data={techSkills} />
            <Title text="Skill Metrics" />
            <TwoColumnContainer backgroundColor="#f1f1f1">
                <BarGraph data={industries} />
                <PieChart data={methodologies} />
            </TwoColumnContainer>
            <Title text="Soft Skills" />
            <SkillCards skills={softSkills} />
            <Title backgroundColor="#505275" foregroundColor="#f1f1f1" text="Contracts" />
            <QuoteTool />
            <footer><h3>Footer</h3></footer>
        </div>
    );
}
