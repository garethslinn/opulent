"use client";

import styled from 'styled-components';

export const FullWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
`;
export const GraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
`;

export const BarWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 2px 0;
`;

export const Bar = styled.div<{ width: number }>`
    background-color: #9FABCA;
    height: 30px;
    width: ${({ width }) => width/3}%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    transition: width 0.3s ease-in-out;
`;

export const BarLabel = styled.span`
    margin-right: 10px;
    font-size: 18px;
    width: 200px;
    text-align: left;
    display: block;
    white-space: nowrap;
`;

export const BarValue = styled.span`
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    background: #fff;
    padding: 2px 5px;
    border-radius: 4px;
    position: absolute;
    right: -40px;
`;