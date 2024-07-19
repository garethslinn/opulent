import styled from 'styled-components';

interface CompaniesListWrapperProps {
    activeIndex: number;
    itemWidth: number;
}

interface CompanyProps {
    active: boolean;
}

export const CompaniesListWrapper = styled.div<CompaniesListWrapperProps>`
  display: flex;
  gap: 10px;
  position: relative;
  overflow: hidden; /* Ensure the overflow is hidden to make the list move smoothly */
  width: 100%;
  transform: ${({ activeIndex, itemWidth }) => `translateX(-${activeIndex * itemWidth}px)`};
  transition: transform 0.5s ease;
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
  min-width: 100px; /* Ensure the items have a minimum width */
  flex: 0 0 auto; /* Ensure the items do not shrink or grow */
`;

export const CompanyImage = styled.img`
  width: auto; /* Adjust as needed */
  height: 65px; /* Adjust as needed */
  object-fit: cover;
`;

export const CompanyTitle = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: #333;
`;
