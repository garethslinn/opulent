"use client";

import React from 'react';
import { TechSkillBarGraphProps } from './TechSkills.types';
import {
    GraphContainer,
    BarContainer,
    BarWrapper,
    Bar,
    BarLabel,
    BarTitle,
    BarImage,
    BarValue
} from './TechSkills.styles';

const colors = {
    1: "#0070f3", // Blue color for core skill
    2: "#2196f3"  // Slightly different blue for complimentary skill
};

const getYearsOfExperience = (year_started: string | null, fixed_years: number | null): number => {
    if (year_started) {
        return new Date().getFullYear() - parseInt(year_started, 10);
    }
    if (fixed_years !== null) {
        return fixed_years;
    }
    return 0;
};

const TechSkillBarGraph: React.FC<TechSkillBarGraphProps> = ({ data }) => {
    // Calculate years of experience and sort the data
    const sortedData = data
        .map(skill => ({
            ...skill,
            years: getYearsOfExperience(skill.year_started, skill.fixed_years)
        }))
        .sort((a, b) => b.years - a.years);

    const maxYears = Math.max(...sortedData.map(skill => skill.years));

    return (
        <GraphContainer>
            <h2>Tech Skills</h2>
            <BarContainer>
                {sortedData.map((skill, index) => (
                    <BarWrapper key={index}>
                        <BarLabel>
                            <BarImage src={skill.image} alt={skill.title} />
                            <BarTitle>{skill.title}</BarTitle>
                        </BarLabel>
                        <Bar width={(skill.years / maxYears) * 100} color={colors[skill.type]}>
                            <BarValue>{skill.years}</BarValue>
                        </Bar>
                    </BarWrapper>
                ))}
            </BarContainer>
        </GraphContainer>
    );
};

export default TechSkillBarGraph;
