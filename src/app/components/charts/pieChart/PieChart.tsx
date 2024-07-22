"use client";

import React from 'react';
import { PieChartProps } from './PieChart.types';
import {
    FullWrapper,
    ChartContainer,
    Svg,
    Slice,
    Legend,
    LegendItem,
    LegendColor,
    LegendLabel
} from './PieChart.style';

const colors = [
    "#4caf50",
    "#2196f3",
    "#ff9800",
    "#f44336"
];

const PieChart: React.FC<PieChartProps> = ({ data }) => {
    const radius = 100;
    const circumference = 2 * Math.PI * radius;
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
            <ChartContainer>
                <Svg viewBox="0 0 200 200">
                    {data.map((method, index) => {
                        const sliceAngle = (method.percent / 100) * 360;
                        const endAngle = startAngle + sliceAngle;
                        const d = describeArc(100, 100, radius, startAngle, endAngle);
                        const color = colors[index % colors.length];
                        startAngle = endAngle;
                        return <Slice key={index} d={d} color={color} />;
                    })}
                </Svg>
                <Legend>
                    {data.map((method, index) => (
                        <LegendItem key={index}>
                            <LegendColor color={colors[index % colors.length]} />
                            <LegendLabel>{method.title}: {method.percent}%</LegendLabel>
                        </LegendItem>
                    ))}
                </Legend>
            </ChartContainer>
        </FullWrapper>
    );
};

export default PieChart;
