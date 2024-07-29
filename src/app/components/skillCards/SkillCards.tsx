import React from 'react';
import styled from 'styled-components';
import {
    GridContainer,
    SkillTitle,
    SkillCard,
    SkillDescription
} from "@/app/components/skillCards/SkillCards.styles";
import { Skill, SkillCardsProps } from "@/app/components/skillCards/SkillCards.types";

const SkillCards: React.FC<SkillCardsProps> = ({ skills }) => {
    return (
        <GridContainer role="list">
            {skills.map((skill, index) => (
                <SkillCard key={index} role="listitem" aria-labelledby={`skill-title-${index}`}>
                    <SkillTitle id={`skill-title-${index}`}>{skill.title}</SkillTitle>
                    <SkillDescription>{skill.description}</SkillDescription>
                </SkillCard>
            ))}
        </GridContainer>
    );
};

export default SkillCards;
