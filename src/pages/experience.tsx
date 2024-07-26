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
import Paragraph from "@/app/components/paragraph/Paragraph";
import React from "react";

export default function Experience() {
    return (
        <>
            <Title first text="Experience cannot be learned" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
                As a seasoned developer with over 20 years of commercial experience,
                I have had the privilege of working across a myriad of industries
                including telecommunications, e-commerce, digital agencies, finance,
                gambling, retail, and many more. My journey is marked by a continuous
                commitment to learning and adapting, allowing me to stay at the
                forefront of technological advancements and industry best practices.
            </Paragraph>
            <Title text="Tech Skills by Years Experience" />
            <SkillGrid data={techSkills} />
            <Title text="Skill Metrics" />
            <TwoColumnContainer backgroundColor="#f1f1f1">
                <BarGraph data={industries} subtext='Number of Contracts by Industry'/>
                <PieChart data={methodologies} subtext='Methodologies used the most' />
            </TwoColumnContainer>
            <Title text="Soft Skills" />
            <SkillCards skills={softSkills} />
            <Title backgroundColor="#f1f1f1" text="Clients" />
            <QuoteTool />
        </>
    );
}
