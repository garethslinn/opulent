'use client';

import React, { useState, useEffect } from 'react';
import {
    QuoteToolWrapper,
    ElementWrapper,
    ChildWrapper,
    LeftColumn,
    QuoteText,
    Icon,
    RightColumn,
    Title,
    Paragraph,
    Line,
} from './QuoteTool.style';
import InlineList from "@/app/components/inlineList/inlineList";
import { companies} from "@/app/stubs/companies";
import {SkillsWrapper} from "@/app/components/quoteTool/QuoteTool.style";
import Item from "@/app/components/item/item";
import Counter from "@/app/components/counter/Counter";

const quotesArrowTheme = {
    fillColor: "transparent",
    outlineColor: "#f1f1f1",
    hoverFillColor: "#ccc",
};

const QuoteTool: React.FC = ({ quoteText = "Professional Experience" }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTitle, setActiveTitle] = useState<string>(companies[0].title);
    const [activeDescription, setActiveDescription] = useState<string>(companies[0].description);
    const [activeSkills, setActiveSkills] = useState<string[]>(companies[0].skills.split(', '));

    const handleNavLeft = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : companies.length - 1));
    };

    const handleNavRight = () => {
        setActiveIndex((prevIndex) => (prevIndex < companies.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        setActiveTitle(companies[activeIndex].title);
        setActiveDescription(companies[activeIndex].description);
        setActiveSkills(companies[activeIndex].skills.split(', '));
    }, [activeIndex]);

    return (
        <QuoteToolWrapper>
            <InlineList
                companies={companies}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                setActiveTitle={setActiveTitle}
                setActiveDescription={setActiveDescription}
            />
            <ElementWrapper>
                <ChildWrapper>
                    <LeftColumn>
                        <Icon src="/assets/images/experience.svg" alt="Icon" />
                        <QuoteText>{quoteText}</QuoteText>
                    </LeftColumn>
                    <RightColumn>
                        <Title>{activeTitle}</Title>
                        <Paragraph>{activeDescription}</Paragraph>
                        <SkillsWrapper>
                            {activeSkills.map((skill, index) => (
                                <Item key={index} skill={skill} />
                            ))}
                        </SkillsWrapper>
                        <Counter
                            activeIndex={activeIndex}
                            totalItems={companies.length}
                            handleNavLeft={handleNavLeft}
                            handleNavRight={handleNavRight}
                            quotesArrowTheme={quotesArrowTheme}
                        />
                    </RightColumn>
                </ChildWrapper>
            </ElementWrapper>
        </QuoteToolWrapper>
    );
};

export default QuoteTool;
