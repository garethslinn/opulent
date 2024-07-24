import styled from 'styled-components';

export const Container = styled.div<{ backgroundColor: string; foregroundColor: string }>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor};
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 20px;
  display: flex;
  align-items: center;
`;

export const ParagraphText = styled.div`
  margin: 0;
  text-align: left;
  font-size: 18px;
  line-height: 30px;
`;
