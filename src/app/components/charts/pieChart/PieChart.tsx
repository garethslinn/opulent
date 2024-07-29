"use client";

import React from 'react';
import { PieChartProps } from './PieChart.types';
import {
    FullWrapper,
    ChartContainer,
    ChartContent,
    SvgContainer,
    Svg,
    Slice,
    LegendContainer,
    LegendItem,
    LegendColor,
    LegendLabel,
    Subtext
} from './PieChart.style';

const colors = [
    "#989cf5",
    "#878EA0",
    "#505A75",
    "#9FABCA"
];

const PieChart: React.FC<PieChartProps> = ({ data, subtext }) => {
    const radius = 100;
    let startAngle = 0;

    const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    const describeArc = (x: number, y: number, radius: number, startAngle: number, endAngle: number) => {
        const start = polarToCartesian(x, y, radius, endAngle);
        const end = polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        const d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
            "L", x, y,
            "Z"
        ].join(" ");
        return d;
    };

    return (
        <FullWrapper>
            <ChartContainer role="img" aria-label={`Pie chart showing data on ${subtext}`}>
                <Subtext>{subtext}</Subtext>
                <ChartContent>
                    <SvgContainer>
                        <Svg viewBox="0 0 200 200">
                            {data.map((method, index) => {
                                const sliceAngle = (method.percent / 100) * 360;
                                const endAngle = startAngle + sliceAngle;
                                const d = describeArc(100, 100, radius, startAngle, endAngle);
                                const color = colors[index % colors.length];
                                startAngle = endAngle;
                                return <Slice key={index} d={d} color={color} aria-label={`${method.title}: ${method.percent}%`} />;
                            })}
                        </Svg>
                    </SvgContainer>
                    <LegendContainer role="list">
                        {data.map((method, index) => (
                            <LegendItem key={index} role="listitem">
                                <LegendColor color={colors[index % colors.length]} />
                                <LegendLabel>{method.title}: {method.percent}%</LegendLabel>
                            </LegendItem>
                        ))}
                    </LegendContainer>
                </ChartContent>
            </ChartContainer>
        </FullWrapper>
    );
};

export default PieChart;
