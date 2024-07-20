'use client';

import React, { useState, useEffect } from 'react';
import { ButtonConst as BUTTON_CONSTANTS } from '../Button/Button.const';
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
import CompaniesList from "@/app/components/QuoteTool/CompaniesList";

const companies = [
    { title: "AIG", image: "/assets/images/brands/aig.svg", description: "AIG is a leading global insurance organization." },
    { title: "AKQA", image: "/assets/images/brands/akqa.svg", description: "AKQA is an ideas and innovation company." },
    { title: "Argos", image: "/assets/images/brands/argos.svg", description: "Argos is a British catalog retailer." },
    { title: "BP", image: "/assets/images/brands/bp.svg", description: "BP is a British multinational oil and gas company." },
    { title: "BT", image: "/assets/images/brands/bt.svg", description: "BT is a British multinational telecommunications company." },
    { title: "Cisco", image: "/assets/images/brands/cisco.svg", description: "Cisco is a multinational technology conglomerate." },
    { title: "Grant Thornton", image: "/assets/images/brands/grant_thornton.svg", description: "Grant Thornton is one of the world's largest professional services networks." },
    { title: "Logica", image: "/assets/images/brands/Logica.svg", description: "Logica was a multinational IT and management consultancy company." },
    { title: "NBrown", image: "/assets/images/brands/nbrown.svg", description: "N Brown Group is a British home shopping company." },
    { title: "Premier Foods", image: "/assets/images/brands/premier_foods.svg", description: "Premier Foods plc is a British food manufacturer." },
    { title: "Sainsburys", image: "/assets/images/brands/sainsburys.svg", description: "Sainsbury's is the second largest chain of supermarkets in the United Kingdom." },
    { title: "Tesco", image: "/assets/images/brands/tesco.svg", description: "Tesco is a British multinational groceries and general merchandise retailer." },
    { title: "Uswitch", image: "/assets/images/brands/uswitch.svg", description: "Uswitch is a UK-based price comparison service and switching website." },
    { title: "William Hill", image: "/assets/images/brands/william_hill.svg", description: "William Hill is a bookmaker based in London, England." },
];

const quotesArrowTheme = {
    fillColor: "transparent",
    outlineColor: "#f1f1f1",
    hoverFillColor: "#ccc",
};

interface QuoteToolProps {
    quoteText?: string;
}

const QuoteTool: React.FC<QuoteToolProps> = ({ quoteText = "Some previous assignments" }) => {
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
                setActiveTitle={setActiveTitle}
                setActiveDescription={setActiveDescription}
            />
            <Pointer />
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
                            <div>{activeIndex + 1}/{companies.length}</div>
                            <Line />
                            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavLeft}>
                                <ArrowButton {...quotesArrowTheme} />
                            </Button>
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
