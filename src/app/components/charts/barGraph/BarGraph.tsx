"use client";

import React from 'react';
import { BarGraphProps } from './BarGraph.types';
import {
    FullWrapper,
    GraphContainer,
    BarContainer,
    BarWrapper,
    Bar,
    BarLabel,
    BarValue,
    Subtext,
    Accessible
} from './BarGraph.styles';

interface Accumulator {
    maxCompanies: number;
    industryArr: {
        key: number;
        industry: string;
        companiesLength: number;
    }[];
}

const BarGraph: React.FC<BarGraphProps> = ({ data, subtext }) => {
    const { maxCompanies, industryArr } = data.reduce<Accumulator>((acc, industry, index) => {
        const companiesLength = industry.companies.length;
        if (companiesLength > acc.maxCompanies) {
            acc.maxCompanies = companiesLength;
        }
        acc.industryArr.push({
            key: index,
            industry: industry.industry,
            companiesLength: companiesLength,
        });
        return acc;
    }, { maxCompanies: 0, industryArr: [] });

    return (
        <FullWrapper>
            <GraphContainer>
                <Subtext>{subtext}</Subtext>
                <Accessible>
                    <ol>
                        {industryArr.map(({ key, industry, companiesLength }) => (
                            <li key={key}>
                                {industry}: {companiesLength}
                            </li>
                        ))}
                    </ol>
                </Accessible>
                <BarContainer aria-hidden="true">
                    {industryArr.map(({ key, industry, companiesLength }) => (
                        <BarWrapper key={key}>
                            <BarLabel id={`bar-label-${key}`}>{industry}</BarLabel>
                            <Bar
                                width={(companiesLength / maxCompanies) * 100}
                            >
                                <BarValue>{companiesLength}</BarValue>
                            </Bar>
                        </BarWrapper>
                    ))}
                </BarContainer>
            </GraphContainer>
        </FullWrapper>
    );
};

export default BarGraph;
