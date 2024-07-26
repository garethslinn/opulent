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
    Subtext
} from './BarGraph.styles';

const BarGraph: React.FC<BarGraphProps> = ({ data, subtext }) => {
    const maxCompanies = Math.max(...data.map(industry => industry.companies.length));

    return (
        <FullWrapper>
            <GraphContainer>
                <Subtext>{subtext}</Subtext>
                <BarContainer>
                    {data.map((industry, index) => (
                        <BarWrapper key={index}>
                            <BarLabel>{industry.industry}</BarLabel>
                            <Bar width={(industry.companies.length / maxCompanies) * 100}>
                                <BarValue>{industry.companies.length}</BarValue>
                            </Bar>
                        </BarWrapper>
                    ))}
                </BarContainer>
            </GraphContainer>
        </FullWrapper>
    );
};

export default BarGraph;
