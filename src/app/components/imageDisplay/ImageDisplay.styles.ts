import styled from 'styled-components';

export const ImageDisplayContainer = styled.div<{ imageRight: boolean }>`
  display: flex;
  flex-direction: ${({ imageRight }) => (imageRight ? 'row-reverse' : 'row')};
  align-items: start;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.max};
  margin: ${({ theme }) => theme.spacing.margin} auto;
  background: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 661px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;
  padding: ${({ theme }) => `${theme.spacing.padding} ${theme.spacing.huge}`};

  h2 {
    font-family: 'Roboto-bold', sans-serif;
    font-size: 24px;
    margin-bottom: ${({ theme }) => theme.spacing.padding};
  }

  div {
    font-size: ${({ theme }) => theme.fontSizes.large};
    line-height: 2;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: ${({ theme }) => theme.spacing.padding};
  }
`;
