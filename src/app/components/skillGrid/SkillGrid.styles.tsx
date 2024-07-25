"use client";

import styled from 'styled-components';

export const FullWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
`;

export const GridContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    background: #f1f1f1;
    color: #000;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
`;

export const GridItem = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    background: #fff;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
    width: 23%; /* Approximately 4 columns */

    @media (max-width: 900px) {
        width: 48%; /* Approximately 2 columns */
    }
`;

export const SkillImage = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;

export const SkillTitle = styled.div`
    flex: 1;
    font-size: 18px;
`;

export const SkillYears = styled.div`
    font-size: 20px;
    font-weight: bold;
`;
