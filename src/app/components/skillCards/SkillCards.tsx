import React from 'react';
import styled from 'styled-components';
import {
    GridContainer,
    SkillTitle,
    SkillCard,
    SkillDescription,
    FullWrapper
} from "@/app/components/skillCards/SkillCards.styles";
import {Skill, SkillCardsProps} from "@/app/components/skillCards/SkillCards.types";


const SkillCards: React.FC<SkillCardsProps> = ({ skills }) => {
    return (
        <FullWrapper>
            <GridContainer>
                {skills.map((skill, index) => (
                    <SkillCard key={index}>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillDescription>{skill.description}</SkillDescription>
                    </SkillCard>
                ))}
            </GridContainer>
        </FullWrapper>
    );
};

export default SkillCards;
