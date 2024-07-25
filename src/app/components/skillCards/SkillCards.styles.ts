import styled from "styled-components";

export const FullWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
`;


export const GridContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 20px 100px 20px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const SkillCard = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
`;

export const SkillTitle = styled.h3`
    font-family: 'Roboto-bold', sans-serif;
    margin: 0 0 10px 0;
    font-size: 1.2em;
`;

export const SkillDescription = styled.p`
    margin: 0;
    font-size: 18px;
    color: #555;
`;
