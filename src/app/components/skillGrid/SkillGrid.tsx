"use client";

import React from 'react';
import { TechSkillsGridProps } from './SkillGrid.types';
import {
    FullWrapper,
    GridContainer,
    GridItem,
    SkillImage,
    SkillTitle,
    SkillYears
} from './SkillGrid.styles';

const getYearsOfExperience = (year_started: string | null, fixed_years: number | null): number => {
    if (year_started) {
        return new Date().getFullYear() - parseInt(year_started, 10);
    }
    if (fixed_years !== null) {
        return fixed_years;
    }
    return 0;
};

const TechSkillsGrid: React.FC<TechSkillsGridProps> = ({ data }) => {
    // Calculate years of experience and sort the data
    const sortedData = data
        .map(skill => ({
            ...skill,
            years: getYearsOfExperience(skill.year_started, skill.fixed_years)
        }))
        .sort((a, b) => b.years - a.years);

    return (
        <FullWrapper>
            <GridContainer>
                {sortedData.map((skill, index) => (
                    <GridItem key={index}>
                        <SkillImage src={skill.image} alt={skill.title} />
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillYears>{skill.years}</SkillYears>
                    </GridItem>
                ))}
            </GridContainer>
        </FullWrapper>
    );
};

export default TechSkillsGrid;