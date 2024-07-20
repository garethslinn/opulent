import styled from 'styled-components';

export const QuoteToolWrapper = styled.div`
  background: #3F404B;
  color: #f1f1f1;

  @media (max-width: 900px) {
    width: 100vw;
  }
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
  width: var(--left-column-width, 25%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    justify-content: start;
    margin-bottom: var(--spacing-small);
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
  flex-grow: 1;
  display: flex;
  flex-direction: column;

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

export const Paragraph = styled.p`
  margin: var(--spacing-small) 0;
  font-size: var(--font-size-medium);

  @media (max-width: 900px) {
    font-size: calc(var(--font-size-medium) / 2);
    text-align: start;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacing-small) 0;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
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
