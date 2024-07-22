"use client";

import React from 'react';
import { BarGraphProps } from './BarGraph.types';
import {
    GraphContainer,
    BarContainer,
    BarWrapper,
    Bar,
    BarLabel,
    BarValue
} from './BarGraph.styles';

const BarGraph: React.FC<BarGraphProps> = ({ data }) => {
    const maxCompanies = Math.max(...data.map(industry => industry.companies.length));

    return (
        <GraphContainer>
            <h2>Companies per Industry</h2>
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
    );
};

export default BarGraph;
