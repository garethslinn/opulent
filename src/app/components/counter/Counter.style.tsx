import styled from 'styled-components';

export const CounterStyle = styled.div`
  display: flex;
  align-items: center;
  margin: var(--spacing-small) 0;
  
  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;
