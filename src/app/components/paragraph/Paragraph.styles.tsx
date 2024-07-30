import styled from 'styled-components';

export const Container = styled.div<{ backgroundColor: string; foregroundColor: string; first?: boolean }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.containerBackground};
  color: ${({ foregroundColor }) => foregroundColor};
  display: flex;
  justify-content: center;
  padding: ${({ first, theme }) => (first ? theme.spacing.padding : theme.spacing.padding)};
  max-width: ${({ theme }) => theme.widths.max};
  margin: 0 auto;
  
  a {
    .img {
      position: relative;
      top: 6px;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.widths.max};
  display: flex;
  align-items: center;
`;

export const ParagraphText = styled.div<{ first?: boolean }>`
  margin: 0;
  text-align: left;
  font-size: ${({ first, theme }) => (first ? '24px' : theme.fontSizes.paragraph)}; 
  line-height: ${({ first }) => (first ? '46px' : '30px')};

  @media (max-width: 900px) {
    font-size: ${({ first }) => (first ? '20px' : '18px')};
    line-height: 1.6;
  }
`;
