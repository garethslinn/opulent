// QuoteTool.tsx
'use client';

import React, { useState, useEffect } from 'react';
import {
    QuoteToolWrapper,
    Pointer,
    ElementWrapper,
    ChildWrapper,
    LeftColumn,
    Icon,
    RightColumn,
    Title,
    Paragraph,
    Counter,
    Line,
} from './QuoteTool.style';
import ArrowButton from "@/app/components/Arrow/Arrow";
import Button from "@/app/components/Button/Button";
import CompaniesList from "@/app/components/quoteTool/CompaniesList";
import { BUTTON_CONST as BUTTON_CONSTANTS} from "@/app/components/Button/Button.const";
import { companies} from "@/app/stubs/companies";

const quotesArrowTheme = {
    fillColor: "transparent",
    outlineColor: "#f1f1f1",
    hoverFillColor: "#ccc",
};

const QuoteTool: React.FC = ({ quoteText = "Previous places worked at" }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTitle, setActiveTitle] = useState<string>(companies[0].title);
    const [activeDescription, setActiveDescription] = useState<string>(companies[0].description);

    const handleNavLeft = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : companies.length - 1));
    };

    const handleNavRight = () => {
        setActiveIndex((prevIndex) => (prevIndex < companies.length - 1 ? prevIndex + 1 : 0));
    };

    useEffect(() => {
        setActiveTitle(companies[activeIndex].title);
        setActiveDescription(companies[activeIndex].description);
    }, [activeIndex]);

    return (
        <QuoteToolWrapper>
            <CompaniesList
                companies={companies}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                setActiveTitle={setActiveTitle}
                setActiveDescription={setActiveDescription}
            />
            <ElementWrapper>
                <ChildWrapper>
                    <LeftColumn>
                        <Icon src="/assets/images/quote.svg" alt="Icon" />
                        <div>{quoteText}</div>
                    </LeftColumn>
                    <RightColumn>
                        <Title>{activeTitle}</Title>
                        <Paragraph>{activeDescription}</Paragraph>
                        <Counter>
                            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavLeft}>
                                <ArrowButton {...quotesArrowTheme} />
                            </Button>
                            <div>{activeIndex + 1}/{companies.length}</div>
                            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavRight}>
                                <ArrowButton {...quotesArrowTheme} rotate={180} />
                            </Button>
                        </Counter>
                    </RightColumn>
                </ChildWrapper>
            </ElementWrapper>
        </QuoteToolWrapper>
    );
};

export default QuoteTool;
