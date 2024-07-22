"use client";

import QuoteTool from "@/app/components/quoteTool/QuoteTool";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import { methodologies } from "@/app/stubs/methodologies";
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import { industries } from "@/app/stubs/industries";
import SkillGrid from "@/app/components/skillGrid/SkillGrid";
import { techSkills } from "@/app/stubs/techSkills";

export default function Home() {
    return (
        <div>
            <h1>Tech Skills Overview</h1>
            <SkillGrid data={techSkills} />
            <h1>Industry Overview</h1>
            <BarGraph data={industries} />
            <h1>Methodology Usage</h1>
            <PieChart data={methodologies} />

            <QuoteTool />
        </div>
    );
}
