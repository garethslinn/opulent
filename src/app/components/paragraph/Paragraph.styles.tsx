import styled from 'styled-components';

export const Container = styled.div<{ backgroundColor: string; foregroundColor: string; first?: boolean }>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor};
  display: flex;
  justify-content: center;
  padding: ${props => (props.first ? '20px 0 20px 0' : '20px 0')}; 
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
`;

export const ParagraphText = styled.div<{ first?: boolean }>`
  margin: 0;
  text-align: left;
  font-size: ${props => (props.first ? '24px' : '18px')}; 
  line-height: ${props => (props.first ? '46px' : '30px')}; 
`;
