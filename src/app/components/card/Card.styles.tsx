// CardStyles.ts
import styled from 'styled-components';

export const CardContainer = styled.div`
  background: #fff;
  padding: 20px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 18px;

  max-width: 1024px;
  margin: 20px auto;
`;

export const Title = styled.h2`
  font-family: 'Roboto-bold', sans-serif;
  border-bottom: 1px solid #000;
  font-size: 30px;
  padding-bottom: 20px;
`;

export const Description = styled.div`
  margin: 10px 0;
  font-size: 20px;
  line-height: 30px;
  width: 60%;

  @media (max-width: 900px) {
    width: 100%;
  }
  
  .ul, li {
    margin-left: 40px;
    margin-bottom: 10px;
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
  align-items: center;
  justify-content: space-between;
`;
