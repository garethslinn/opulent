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

export default function Home() {
    return (
        <div>
            <h1>Tech Skills Overview</h1>
            <SkillGrid data={techSkills} />
            <TwoColumnContainer backgroundColor="#f1f1f1">
                <BarGraph data={industries} />
                <PieChart data={methodologies} />
            </TwoColumnContainer>
            <SkillCards skills={softSkills} />
            <QuoteTool />
        </div>
    );
}
