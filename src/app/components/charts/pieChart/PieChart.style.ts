import styled from 'styled-components';

export const FullWrapper = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media (max-width: 900px) {
    padding: ${({ theme }) => `${theme.spacing.tiny} ${theme.spacing.padding}`};
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.widths.max};
  min-height: 388px;
  padding: ${({ theme }) => theme.spacing.padding};

  @media (max-width: 900px) {
    transform: scale(1.1);
    padding: ${({ theme }) => `${theme.spacing.padding} 0`};
    min-height: unset;
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
    width: 125px;
    height: 125px;
  }
`;

export const Svg = styled.svg`
  width: 100%;
  height: 100%;

  @media (max-width: 450px) {
    width: 70%;
    height: 70%;
  }
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
  margin-left: ${({ theme }) => theme.spacing.small};

  @media (max-width: 900px) {
    margin-left: ${({ theme }) => `calc(${theme.spacing.medium})`};
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.tiny};
`;

export const LegendColor = styled.span<{ color: string }>`
  width: 16px;
  height: 16px;
  background-color: ${({ color }) => color};
  margin-right: ${({ theme }) => theme.spacing.tiny};
  display: inline-block;

  @media (max-width: 900px) {
    width: 17px;
    height: 17px;
  }
`;

export const LegendLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};

  @media (max-width: 900px) {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.medium})`};
  }
`;

export const Subtext = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  text-align: center;
  font-variant-caps: all-petite-caps;
  @media (max-width: 900px) {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.medium})`};
  }
`;
