"use client";

import styled from 'styled-components';

export const GraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: sta;
    width: 100%;
    padding: 20px;
`;

export const BarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const BarWrapper = styled.div`
    display: flex;
    margin: 10px 0;
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
    align-items: center;
    margin-right: 10px;
  font-size: 13px;
  background: red;
    width: 100px;
  max-width: 200px;
    display: block;
    white-space: nowrap;
`;

export const BarImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

export const BarValue = styled.span`
    margin-left: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #333;
    background: #fff;
    padding: 2px 5px;
    border-radius: 4px;
    position: absolute;
    left: 0;
`;
