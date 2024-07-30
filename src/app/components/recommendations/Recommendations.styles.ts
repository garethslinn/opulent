import styled from 'styled-components';

export const RecommendationWrapper = styled.div`
  background: ${({ theme }) => theme.colors.containerBackground};
  padding-bottom: 20px; 
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1024px;
  margin: 0 auto;

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-size: 18px;
  line-height: 1.6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 100%;
  flex: 1 1 calc(50% - 20px);
  box-sizing: border-box;
  position: relative;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`;

export const QuoteIconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const QuoteIcon = styled.svg`
  width: 50px; 
  height: 50px; 
  margin-right: 10px; 
`;

export const ClosingQuoteContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: -20px; 
`;

export const ClosingQuoteIcon = styled.svg`
  width: 50px; /* Adjust as needed */
  height: 50px; /* Adjust as needed */
  margin-left: 10px; /* Adjust as needed */
  transform: scaleX(-1); /* Flip horizontally */
`;

export const Name = styled.h2`
  margin: 0;
`;

export const Position = styled.h4`
  margin: 5px 0;
`;

export const Description = styled.p`
  margin: 10px 0 0;
  background: ${({ theme }) => theme.colors.white};
  padding-right: 60px;
`;
