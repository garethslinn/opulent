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

export default function Experience() {
    return (
        <div>
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
        </div>
    );
}
