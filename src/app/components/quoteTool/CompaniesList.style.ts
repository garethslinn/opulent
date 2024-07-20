import styled from 'styled-components';

interface CompaniesListWrapperProps {
    activeIndex: number;
}

interface CompanyProps {
    active: boolean;
}

export const QuoteToolWrapper = styled.div`
  padding: var(--spacing-padding);
  background: #3F404B;
  color: #f1f1f1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CompaniesListWrapper = styled.div<CompaniesListWrapperProps>`
  display: flex;
  gap: 10px;
  overflow: hidden;
  width: 100%;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 110}px)`}; /* Adjust this to match the width of each company item + gap */
  transition: transform 0.5s ease;

  @media (max-width: 900px) {
    transform: ${({ activeIndex }) => `translateX(-${activeIndex * 55}px)`}; /* Adjust this to match the width of each company item + gap */
  }
`;

export const Company = styled.div<CompanyProps>`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  border: ${({ active }) => (active ? '2px solid #333' : 'none')};
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s, border 0.3s;
  width: 100px; /* Set fixed width */

  @media (max-width: 900px) {
    width: 50px; /* Set smaller fixed width for smaller screens */
  }
`;

export const CompanyImage = styled.img`
  width: auto;
  height: 55px;
  object-fit: cover;

  @media (max-width: 900px) {
    height: 27.5px;
  }
`;

export const CompanyTitle = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #333;

  @media (max-width: 900px) {
    font-size: 7px;
  }
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
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ChildWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const LeftColumn = styled.div`
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
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
    align-items: center;
  }
`;

export const Title = styled.h1`
  margin: var(--spacing-small) 0;
  font-size: var(--font-size-large);

  @media (max-width: 900px) {
    font-size: calc(var(--font-size-large) / 2);
  }
`;

export const Paragraph = styled.p`
  margin: var(--spacing-small) 0;
  font-size: var(--font-size-medium);

  @media (max-width: 900px) {
    font-size: calc(var(--font-size-medium) / 2);
    text-align: center;
  }
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-small) 0;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: space-between;
    margin-top: var(--spacing-medium);
  }
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 1px;
  background: var(--color-primary);
  margin: 0 var(--spacing-small);

  @media (max-width: 900px) {
    display: none;
  }
`;
