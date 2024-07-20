import styled from 'styled-components';

interface CompaniesListWrapperProps {
    activeIndex: number;
    itemWidth: number;
    visibleItems: number;
}

interface CompanyProps {
    active: boolean;
}

export const QuoteToolWrapper = styled.div`
  padding: var(--spacing-padding);
  background: #3F404B;
  color: #f1f1f1;
  width: 100%;
  max-width: 1200px; /* Set a consistent max-width */
  margin: 0 auto; /* Center the component */
`;

export const CompaniesListWrapper = styled.div<CompaniesListWrapperProps>`
  display: flex;
  background: #505275;
  gap: 10px;
  position: relative;
  overflow: hidden; /* Ensure the overflow is hidden to make the list move smoothly */
  width: 100%;
  transform: ${({ activeIndex, itemWidth, visibleItems }) => {
    const totalItems = activeIndex + 1;
    const offset = totalItems > visibleItems ? (totalItems - visibleItems) * itemWidth : 0;
    return `translateX(-${offset}px)`;
}};
  transition: transform 0.5s ease;

  @media (max-width: 900px) {
    transform: none;
  }
`;

export const Company = styled.div<CompanyProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({ active }) => (active ? '#fff' : 'transparent')};
  border: ${({ active }) => (active ? '2px solid #333' : 'none')};
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s, border 0.3s;
  width: 100px; /* Ensure the items have a fixed width */
  flex: 0 0 auto; /* Ensure the items do not shrink or grow */

  @media (max-width: 900px) {
    width: calc(100px / 2); /* Adjust the width for smaller screens */
  }
`;

export const CompanyImage = styled.img`
  width: auto; /* Adjust as needed */
  height: 55px; /* Adjust as needed */
  object-fit: cover;

  @media (max-width: 900px) {
    height: calc(55px / 2); /* Adjust the height for smaller screens */
  }
`;

