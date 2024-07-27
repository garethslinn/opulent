export type TechSkillType = 1 | 2;

export interface TechSkill {
    title: string;
    type: TechSkillType;
    image: string;
    year_started: string | null;
    fixed_years: number | null;
}

export interface TechSkillBarGraphProps {
    data: TechSkill[];
}
