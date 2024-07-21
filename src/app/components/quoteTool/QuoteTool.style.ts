import styled from 'styled-components';

export const QuoteToolWrapper = styled.div`
  background: var(--color-counter-background);
  color: #f1f1f1;
  //min-height: 600px;
  position: relative;
`;

export const ElementWrapper = styled.div`
  width: var(--width-full);
  display: flex;
  justify-content: center;
`;

export const ChildWrapper = styled.div`
  width: var(--width-full);
  max-width: var(--width-max);
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const LeftColumn = styled.div`
  width: var(--left-column-width, 200px);
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    padding-left: 50px;
    width: 100%;
    flex-direction: row;
    justify-content: start;
    margin-bottom: var(--spacing-small);
  }
`;


export const QuoteText = styled.div`
  
  @media (max-width: 900px) {
    font-size: var(--font-size-title);
    margin-top: 35px;
    margin-left: var(--spacing-small);
  }
`;

export const Icon = styled.img`
  width: var(--icon-large);
  height: var(--icon-large);

  @media (max-width: 900px) {
    width: calc(var(--icon-large) / 2);
    height: calc(var(--icon-large) / 2);
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  
  @media (max-width: 900px) {
    align-items: stretch;
  }
`;

export const Title = styled.h1`
  margin: var(--spacing-small) 0;
  font-size: 30px;

  @media (max-width: 900px) {
    font-size: calc(var(--font-size-title));
  }
`;

export const SkillsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: var(--spacing-small) 0;
`;

export const Paragraph = styled.p`
  margin: var(--spacing-small) 0;
  font-size: 20px;

  @media (max-width: 900px) {
    font-size: calc(var(--font-size-medium) / 2);
    text-align: start;
  }
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: #ccc;
  margin: 0 var(--spacing-small);

  @media (max-width: 900px) {
    width: 100%;
    margin: var(--spacing-small) 0;
  }
`;
