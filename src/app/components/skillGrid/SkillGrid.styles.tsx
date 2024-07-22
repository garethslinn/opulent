"use client";

import styled from 'styled-components';

export const FullWrapper = styled.div`
  background: var(--color-counter-background);
  width: 100%;
`;

export const GridContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background: #3f404b;
  color: #f1f1f1;
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
    font-size: 14px;
    font-weight: bold;
`;

export const SkillYears = styled.div`
    font-size: 14px;
`;
