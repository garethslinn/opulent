import styled from 'styled-components';

interface CompaniesListWrapperProps {
    activeIndex: number;
    itemWidth: number;
    visibleItems: number;
}

interface CompanyProps {
    active: boolean;
}

export const CompaniesListLayout = styled.div`
  background: #505275;
`;

export const CompaniesListWrapper = styled.div<CompaniesListWrapperProps>`
  padding: var(--spacing-padding);
  display: flex;
  gap: 5px;
  width: 100%;
  background: #505275;
  transform: ${({ activeIndex, itemWidth, visibleItems }) => {
    const halfway = Math.floor(visibleItems / 3);
    const moveIndex = activeIndex >= halfway ? activeIndex - halfway : 0;
    return `translateX(-${moveIndex * (itemWidth + 20)}px)`;
}};
  transition: transform 0.5s ease;

@media (max-width: 900px) {
    gap: 5px;
    transform: ${({ activeIndex, itemWidth, visibleItems }) => {
    const halfway = Math.floor(visibleItems / 5);
    const moveIndex = activeIndex >= halfway ? activeIndex - halfway : 0;
    return `translateX(-${moveIndex * (itemWidth + 55)}px)`;
}};
  
@media (max-width: 450px) {
 display: none;
}};

  }
`;

export const Company = styled.div<CompanyProps>`
  flex: 0 0 auto;
  border: ${({ active }) => (active ? '1px solid #fff' : 'none')};
  padding: 0 10px;
  border-radius: 5px;
  transition: background-color 0.3s, border 0.3s;
  cursor: pointer;
`;

export const CompanyImage = styled.img`
  width: auto;
  height: 45px;
  object-fit: cover;
  position: relative;
  top: 10px;

  @media (max-width: 900px) {
    height: 45px;
  }
`;

export const CompanyTitle = styled.div`
  margin-top: 5px;
  font-size: 14px;

  @media (max-width: 900px) {
    font-size: 7px;
  }
`;
