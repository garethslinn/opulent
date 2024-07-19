import styled from 'styled-components';

export const QuoteToolWrapper = styled.div`
  padding: var(--spacing-padding);
`;

export const CompaniesList = styled.div`
  display: flex;  
  justify-content: center;
  margin-bottom: var(--spacing-margin);
`;

export const Company = styled.div`
  margin: 0 var(--spacing-small);
  cursor: pointer;
`;

export const Pointer = styled.div`
  width: 0;
  height: 0;
  border-left: var(--size-large) solid transparent;
  border-right: var(--size-large) solid transparent;
  border-top: var(--size-large) solid var(--color-primary);
  margin: 0 auto;
  transform: rotate(180deg);
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
`;

export const LeftColumn = styled.div`
  width: var(--left-column-width, 25%);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: var(--icon-large);
  height: var(--icon-large);
`;

export const RightColumn = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: var(--spacing-small) 0;
`;

export const Paragraph = styled.p`
  margin: var(--spacing-small) 0;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-small) 0;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: var(--color-primary);
  margin: 0 var(--spacing-small);
`;

export const Arrow = styled.div`
  margin: 0 var(--spacing-tiny);
  cursor: pointer;
`;
