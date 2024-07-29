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
            <GraphContainer role="img" aria-label={`Bar graph showing data on ${subtext}`}>
                <Subtext>{subtext}</Subtext>
                <BarContainer>
                    {data.map((industry, index) => (
                        <BarWrapper key={index} role="listitem">
                            <BarLabel id={`bar-label-${index}`}>{industry.industry}</BarLabel>
                            <Bar
                                width={(industry.companies.length / maxCompanies) * 100}
                                aria-labelledby={`bar-label-${index}`}
                                role="progressbar"
                                aria-valuenow={industry.companies.length}
                                aria-valuemin={0}
                                aria-valuemax={maxCompanies}
                            >
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
