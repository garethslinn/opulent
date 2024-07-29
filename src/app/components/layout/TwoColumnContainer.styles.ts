import styled from 'styled-components';

export const Container = styled.div<{ backgroundColor: string }>`
  max-width: ${({ theme }) => theme.widths.max};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ backgroundColor }) => backgroundColor};

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
    margin-right: ${({ theme }) => theme.spacing.small};
    margin-left: 0;
  }

  &:last-child {
    margin-left: ${({ theme }) => theme.spacing.small};
    margin-right: 0;
  }

  @media (max-width: 900px) {
    &:first-child {
      margin: 0 0 ${({ theme }) => theme.spacing.small} 0;
    }

    &:last-child {
      margin: 0;
    }
  }
`;
