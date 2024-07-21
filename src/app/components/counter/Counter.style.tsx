import styled from 'styled-components';

export const CounterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 10px 0;
  
  svg {
    flex-grow: 1;
    margin: 0 10px;
  }

  div {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0 5px;
  }

  button {
    padding: 0 10px;
  }
`;
