import styled from 'styled-components';

export const FullWrapper = styled.div`
  background: ${({ theme }) => theme.colors.containerBackground};
  width: 100%;
`;

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.padding};
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.widths.max};
`;

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0;
`;

export const Bar = styled.div<{ width: number }>`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  height: 30px;
  width: ${({ width }) => width / 3}%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  transition: width 0.3s ease-in-out;
`;

export const BarLabel = styled.span`
  margin-right: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  width: 200px;
  text-align: left;
  display: block;
  white-space: nowrap;

  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    width: 140px;
  }
`;

export const BarValue = styled.span`
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: bold;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 2px 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  right: -30px;
`;

export const Subtext = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: normal;
  font-variant-caps: all-petite-caps;
`;
