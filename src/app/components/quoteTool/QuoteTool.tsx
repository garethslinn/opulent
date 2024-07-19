'use client';

import React from 'react';
import { ButtonConst as BUTTON_CONSTANTS } from '../Button/Button.const';
import {
    QuoteToolWrapper,
    CompaniesList,
    Company,
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

const QuoteTool: React.FC = () => {
    const handleNavLeft = () => {
        return false;
    }

    const handleNavRight= () => {
        return false;
    }

    return (
        <QuoteToolWrapper>
            <CompaniesList>
                <Company>Company 1</Company>
                <Company>Company 2</Company>
                <Company>Company 3</Company>
                <Company>Company 4</Company>
                <Company>Company 5</Company>
                <Company>Company 6</Company>
                <Company>Company 7</Company>
                <Company>Company 8</Company>
                <Company>Company 9</Company>
            </CompaniesList>
            <Pointer />
            <ElementWrapper>
                <ChildWrapper>
                    <LeftColumn>
                        <Icon src="/assets/images/quote.svg" alt="Icon" />
                        <div>Some text</div>
                    </LeftColumn>
                    <RightColumn>
                        <Title>Title</Title>
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
                            <Button {...BUTTON_CONSTANTS.TRANSPARENT}  onClick={handleNavRight}>
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
