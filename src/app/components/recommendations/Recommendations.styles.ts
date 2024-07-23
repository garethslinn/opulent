import styled from 'styled-components';

export const RecommendationWrapper = styled.div`
  background: #f1f1f1;
`;

export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 1024px;
  margin: 10px auto;
`;

export const Name = styled.h2`
  margin: 0;
  color: #333;
`;

export const Position = styled.h4`
  margin: 5px 0;
  color: #555;
`;

export const Description = styled.p`
  margin: 10px 0 0;
  color: #666;
`;
