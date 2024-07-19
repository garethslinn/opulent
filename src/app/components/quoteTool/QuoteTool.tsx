'use client';

import React, { useState } from 'react';
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
import CompaniesList from "@/app/components/QuoteTool/CompaniesList"; // Adjust the path as needed

const companies = [
    { title: "AIG", image: "/assets/images/brands/aig.svg" },
    { title: "AKQA", image: "/assets/images/brands/akqa.svg" },
    { title: "Argos", image: "/assets/images/brands/argos.svg" },
    { title: "BP", image: "/assets/images/brands/bp.svg" },
    { title: "BT", image: "/assets/images/brands/bt.svg" },
    { title: "Cisco", image: "/assets/images/brands/cisco.svg" },
    { title: "Grant Thornton", image: "/assets/images/brands/grant_thornton.svg" },
    { title: "Logica", image: "/assets/images/brands/Logica.svg" },
    { title: "NBrown", image: "/assets/images/brands/nbrown.svg" },
    { title: "Premier Foods", image: "/assets/images/brands/premier_foods.svg" },
    { title: "Sainsburys", image: "/assets/images/brands/sainsburys.svg" },
    { title: "Tesco", image: "/assets/images/brands/tesco.svg" },
    { title: "Uswitch", image: "/assets/images/brands/uswitch.svg" },
    { title: "William Hill", image: "/assets/images/brands/william_hill.svg" },
    // Add more companies as needed
];

const QuoteTool: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTitle, setActiveTitle] = useState<string>(companies[0].title);

    const handleNavLeft = () => {
        setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : companies.length - 1));
    };

    const handleNavRight = () => {
        setActiveIndex((prevIndex) => (prevIndex < companies.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <QuoteToolWrapper>
            <CompaniesList companies={companies} activeIndex={activeIndex} setActiveTitle={setActiveTitle} />
            <Pointer />
            <ElementWrapper>
                <ChildWrapper>
                    <LeftColumn>
                        <Icon src="/assets/images/quote.svg" alt="Icon" />
                        <div>Some text</div>
                    </LeftColumn>
                    <RightColumn>
                        <Title>{activeTitle}</Title>
                        <Paragraph>
                            This is a paragraph with some content. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                        </Paragraph>
                        <Counter>
                            <div>1/20</div>
                            <Line />
                            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavLeft}>
                                <ArrowButton />
                            </Button>
                            <Button {...BUTTON_CONSTANTS.TRANSPARENT} onClick={handleNavRight}>
                                <ArrowButton rotate={180} />
                            </Button>
                        </Counter>
                    </RightColumn>
                </ChildWrapper>
            </ElementWrapper>
        </QuoteToolWrapper>
    );
};

export default QuoteTool;
