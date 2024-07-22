export interface TechSkill {
    title: string;
    type: number;
    image: string;
    year_started: string | null;
    fixed_years: number | null;
}

export interface TechSkillBarGraphProps {
    data: TechSkill[];
}
