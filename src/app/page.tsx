// import Image from "next/image";
// import styles from "./page.module.css";
import QuoteTool from "@/app/components/quoteTool/QuoteTool";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import {methodologies} from "@/app/stubs/methodologies";
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import {industries} from "@/app/stubs/industries";
import TechSkillBarGraph from "@/app/components/charts/techSkills/TechSkills";
import {techSkills} from "@/app/stubs/techSkillS";

export default function Home() {
  return (
      <div>

          {/*<h1>Industry Overview</h1>*/}
          {/*<BarGraph data={industries} />*/}
          {/*<h1>Methodology Usage</h1>*/}
          {/*<PieChart data={methodologies} />*/}
          <h1>Tech Skills Overview</h1>
          {techSkills && <TechSkillBarGraph data={techSkills} />}

        <QuoteTool />
      </div>
  );
}
