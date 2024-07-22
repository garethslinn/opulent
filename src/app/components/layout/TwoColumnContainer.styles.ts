import styled from 'styled-components';


export const FullWrapper = styled.div`
  background: #f1f1f1;
  width: 100%;
`;

export const Container = styled.div<{ backgroundColor: string }>`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    background-color: ${props => props.backgroundColor};

    @media (max-width: 900px) {
        .column {
            flex: 100%;
        }
    }
`;

export const Column = styled.div`
    flex: 1;
    padding: 10px;
`;
