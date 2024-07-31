export interface TechSkill {
    title: string;
    abbr?: string;
    type: number;
    image: string;
    year_started: string | null;
    fixed_years: number | null;
}

export interface TechSkillsGridProps {
    data: TechSkill[];
}
