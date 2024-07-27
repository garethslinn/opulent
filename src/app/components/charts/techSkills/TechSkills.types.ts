export interface TechSkill {
    title: string;
    type: string;
    image: string;
    year_started: string | null;
    fixed_years: number | null;
}

export interface TechSkillBarGraphProps {
    data: TechSkill[];
}
