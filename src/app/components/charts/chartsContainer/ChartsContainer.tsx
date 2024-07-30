"use client";

import React from 'react';

import {
    ChartsWrapper,
    ChartWrapper,
    BarGraphContainer,
    PieChartContainer
} from './ChartsContainer.styles';
import BarGraph from "@/app/components/charts/barGraph/BarGraph";
import PieChart from "@/app/components/charts/pieChart/PieChart";
import { methodologies } from "@/app/stubs/methodologies";
import { industries } from "@/app/stubs/industries";

const ChartsContainer: React.FC = () => {


    return (
        <ChartsWrapper>
            <ChartWrapper>
                <BarGraphContainer>
                    <BarGraph data={industries} subtext='Number of Contracts by Industry' />
                </BarGraphContainer>
                <PieChartContainer>
                    <PieChart data={methodologies} subtext='Methodologies used the most' />
                </PieChartContainer>
            </ChartWrapper>
        </ChartsWrapper>
    );
};

export default ChartsContainer;
