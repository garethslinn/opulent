import styled from 'styled-components';

export const CounterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: ${({ theme }) => theme.spacing.small} 0;

  svg {
    flex-grow: 1;
    margin: 0 ${({ theme }) => theme.spacing.small};
  }

  div {
    font-size: ${({ theme }) => theme.fontSizes.title};
    font-weight: bold;
    margin: 0 ${({ theme }) => theme.spacing.tiny};
  }

  button {
    padding: 0 ${({ theme }) => theme.spacing.small};
  }
`;
