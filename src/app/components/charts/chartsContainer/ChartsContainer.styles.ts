import styled from 'styled-components';

export const ChartsWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.padding};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  @media (max-width: 900px) {
    margin-top: 20px;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const BarGraphContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const PieChartContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
