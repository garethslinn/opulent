import React, { useState, useEffect, useRef } from 'react';
import {
    QuoteToolWrapper,
    ElementWrapper,
    ChildWrapper,
    LeftColumn,
    QuoteText,
    Icon,
    RightColumn,
    Title,
    SkillsWrapper
} from './QuoteTool.style';
import {
    BulletList,
    BulletItem
} from '../../components/bulletList/BulletList.styles';
import InlineList from "@/app/components/inlineList/InlineList";
import { companies } from "@/app/constants/companies";
import { items } from "@/app/constants/items";
import Item from "@/app/components/item/item";
import Counter from "@/app/components/counter/Counter";
import useDeviceType from "@/app/hooks/useDeviceType";
import { useTheme } from "styled-components"; // Import useTheme

const QuoteTool: React.FC<{ quoteText?: string }> = ({ quoteText = "Professional Experience" }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTitle, setActiveTitle] = useState<string>(companies[0].title);
    const [activeDescription, setActiveDescription] = useState<string[]>(companies[0].description); // Updated to string[]
    const [activeSkills, setActiveSkills] = useState<string[]>(companies[0].skills.split(', '));
    const [isUserInteracting, setIsUserInteracting] = useState<boolean>(true); // cancel automation
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const [deviceType, width] = useDeviceType();
    const theme = useTheme(); // Access the theme directly using useTheme hook

    const quotesArrowTheme = {
        fillColor: "transparent",
        outlineColor: theme.colors.black, // Directly use theme's color
        hoverFillColor: "#ccc",
    };

    const handleNavLeft = () => {
        setIsUserInteracting(true);
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : companies.length - 1));
    };

    const handleNavRight = () => {
        setIsUserInteracting(true);
        setActiveIndex((prevIndex) => (prevIndex < companies.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        setActiveTitle(companies[activeIndex].title);
        setActiveDescription(companies[activeIndex].description); // Updated to string[]
        setActiveSkills(companies[activeIndex].skills.split(', '));
    }, [activeIndex]);

    useEffect(() => {
        if (!isUserInteracting) {
            intervalRef.current = setInterval(() => {
                setActiveIndex((prevIndex) => (prevIndex < companies.length - 1 ? prevIndex + 1 : 0));
            }, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isUserInteracting]);

    return (
        <QuoteToolWrapper role="main">
            <InlineList
                companies={companies}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                setActiveTitle={setActiveTitle}
                setActiveDescription={setActiveDescription} // Updated to string[]
            />
            <ElementWrapper>
                <ChildWrapper>
                    <LeftColumn>
                        <Icon src="/assets/images/experience.svg" alt="Icon" />
                        <QuoteText>{quoteText}</QuoteText>
                    </LeftColumn>
                    <RightColumn>
                        {deviceType === 'mobile' && <Title>{activeTitle}</Title>}
                        <Counter
                            activeIndex={activeIndex}
                            totalItems={companies.length}
                            handleNavLeft={handleNavLeft}
                            handleNavRight={handleNavRight}
                            quotesArrowTheme={quotesArrowTheme} // Pass theme as a prop
                        />
                        {deviceType !== 'mobile' && <Title>{activeTitle}</Title>}
                        <BulletList>
                            {activeDescription.map((desc, index) => (
                                <BulletItem key={index}>{desc}</BulletItem>
                            ))}
                        </BulletList>
                        <SkillsWrapper>
                            {activeSkills.map((skill, index) => {
                                const item = items.find(i => i.skill.toLowerCase() === skill.toLowerCase());
                                return (
                                    <Item key={index} skill={skill} type={item ? item.type : 1} />
                                );
                            })}
                        </SkillsWrapper>
                    </RightColumn>
                </ChildWrapper>
            </ElementWrapper>
        </QuoteToolWrapper>
    );
};

export default QuoteTool;
