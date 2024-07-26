"use client"

import React from 'react';
import Title from "@/app/components/title/Title";
import Paragraph from "@/app/components/paragraph/Paragraph";
import SkillGrid from "@/app/components/skillGrid/SkillGrid";
import {techSkills} from "@/app/stubs/techSkills";
import QuoteTool from "../app/components/quoteTool/QuoteTool";
import TwoColumnContainer from "@/app/components/layout/TwoColumnContainer";
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import {industries} from "@/app/stubs/industries";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import {methodologies} from "@/app/stubs/methodologies";
import SkillCards from "@/app/components/skillCards/SkillCards";
import {softSkills} from "@/app/stubs/softSkills";

const GraphicDesign: React.FC = () => {
    return (
        <>
            <Title first text="Graphic Design" />
            <Paragraph first backgroundColor="#f1f1f1" foregroundColor="">
               Some placeholder text...
            </Paragraph>
        </>
    )
};

export default GraphicDesign;

