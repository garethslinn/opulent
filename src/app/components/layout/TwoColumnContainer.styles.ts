import styled from 'styled-components';

export const Container = styled.div<{ backgroundColor: string }>`
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    background-color: ${props => props.backgroundColor};

    @media (max-width: 900px) {
        .column {
            flex: 100%;
            margin: 0; 
        }
    }
`;

export const Column = styled.div`
    flex: 1;

    &:first-child {
        margin-right: 10px;
        margin-left: 0; 
    }

    &:last-child {
        margin-left: 10px;
        margin-right: 0; 
    }

    @media (max-width: 900px) {
      &:first-child {
        margin: 0 0 20px 0;
      }

      &:last-child {
        margin: 0;
      }
    }
`;
