import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.padding};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius};
  max-width: ${({ theme }) => theme.widths.max};
  margin: ${({ theme }) => theme.spacing.margin} auto;

  .learn-more {
    padding: ${({ theme }) => theme.spacing.tiny} ${({ theme }) => theme.spacing.padding};
    display: inline-block;
    margin-top: ${({ theme }) => theme.spacing.margin};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.linkColor};
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto-bold', sans-serif;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  font-size: 24px;
  padding-bottom: ${({ theme }) => theme.spacing.padding};

  @media (max-width: 640px) {
    font-size: ${({ theme }) => `calc(${theme.fontSizes.large})`};
  }
`;

export const Description = styled.div`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  line-height: ${({ theme }) => `calc(${theme.fontSizes.large} + 10px)`};
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
  }

  .ul, li {
    margin-left: ${({ theme }) => theme.spacing.huge};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing.huge};

  @media (max-width: 640px) {
    margin-top: ${({ theme }) => theme.spacing.padding};
  }
`;
