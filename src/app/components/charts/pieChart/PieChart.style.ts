import styled from 'styled-components';

export const FullWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
`;
export const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    position: relative;
`;

export const Svg = styled.svg`
    width: 100%;
    height: 100%;
`;

export const Slice = styled.path<{ color: string }>`
    fill: ${({ color }) => color};
    stroke: #fff;
    stroke-width: 2px;
`;

export const Legend = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const LegendItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

export const LegendColor = styled.span<{ color: string }>`
    width: 16px;
    height: 16px;
    background-color: ${({ color }) => color};
    margin-right: 8px;
    display: inline-block;
`;

export const LegendLabel = styled.span`
    font-size: 14px;
    color: #333;
`;
