// CardStyles.ts
import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 18px;

  max-width: 1024px;
  margin: 10px auto;
`;

export const Title = styled.h2`
  border-bottom: 1px solid #000;
  font-size: 30px;
  padding-bottom: 20px;
`;

export const Description = styled.div`
  margin: 10px 0;
  font-size: 18px;
  line-height: 30px;
  width: 60%;
`;

export const ImageWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;