"use client";

import styled from 'styled-components';

export const GraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.padding};
`;

export const BarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.containerBackground};
  padding: ${({ theme }) => theme.spacing.padding};
  border-radius: ${({ theme }) => theme.borderRadius};
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const BarWrapper = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spacing.small} 0;
  width: 28%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Bar = styled.div<{ width: number; color: string }>`
  background-color: ${({ color }) => color};
  height: 20px;
  width: ${({ width }) => width}%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  transition: width 0.3s ease-in-out;
`;

export const BarLabel = styled.div`
  align-items: flex-start;
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.small};
  width: 120px;
  max-width: 200px;
  display: block;
`;

export const BarTitle = styled.div`
  position: relative;
  font-size: ${({ theme }) => theme.fontSizes.small};
  width: 100px;
  max-width: 200px;
  display: inline;
  right: 5px;
  bottom: 18px;
`;

export const BarImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const BarValue = styled.span`
  margin-left: ${({ theme }) => theme.spacing.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  background: ${({ theme }) => theme.colors.white};
  padding: 2px 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: absolute;
  left: 0;
`;
