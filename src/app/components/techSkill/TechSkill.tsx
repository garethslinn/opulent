import React from 'react';
import { TechSkill as TechSkillType } from './TechSkill.types';
import { Container, Card, Title, Image, Level, LevelIndicator, DescriptionList, DescriptionItem } from './TechSkill.styles';

interface TechSkillProps {
    skills: TechSkillType[];
}

const TechSkill: React.FC<TechSkillProps> = ({ skills }) => {
    return (
        <Container>
            {skills.map((skill, index) => (
                <Card key={index}>
                    <Image src={skill.image} alt={`${skill.title} logo`} />
                    <Title>{skill.title}</Title>
                    <DescriptionList>
                        {skill.description.map((desc, i) => (
                            <DescriptionItem key={i}>{desc}</DescriptionItem>
                        ))}
                    </DescriptionList>
                    <Level>
                        {Array.from({ length: 3 }, (_, i) => (
                            <LevelIndicator key={i} active={i < skill.type} />
                        ))}
                    </Level>
                </Card>
            ))}
        </Container>
    );
};

export default TechSkill;
