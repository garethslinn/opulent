import styled from 'styled-components';

export const FullWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (max-width: 900px) {
    padding: 20px;
  }
`;

export const ChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    min-height: 388px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;

    @media (max-width: 900px) {
        transform: scale(1.1);
        width: 97%;
    }
`;

export const ChartContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const SvgContainer = styled.div`
    width: 200px;
    height: 200px;

    @media (max-width: 900px) {
        width: 220px;
        height: 220px;
    }
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

export const LegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;

    @media (max-width: 900px) {
        margin-left: 22px;
    }
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

    @media (max-width: 900px) {
        width: 17px;
        height: 17px;
    }
`;

export const LegendLabel = styled.span`
    font-size: 14px;

    @media (max-width: 900px) {
        font-size: 15px;
    }
`;

export const Subtext = styled.h2`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: normal;
    color: #333;
    width: 100%;
    text-align: center;
    font-variant-caps: all-petite-caps;
`;
