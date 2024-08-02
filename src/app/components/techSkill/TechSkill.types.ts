export interface TechSkill {
    abbr: string;
    title: string;
    type: number; // Skill level: 1 = beginner, 2 = intermediate, 3 = expert
    image: string;
    year_started: string | null;
    fixed_years: number | null;
    description: string[];
}
