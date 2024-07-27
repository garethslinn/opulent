import styled from 'styled-components';

interface ContainerProps {
    backgroundColor?: string;
    foregroundColor?: string;
    first?: boolean;
}

export const Container = styled.div<ContainerProps>`
  font-family: 'Roboto-bold', sans-serif;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor};
  display: flex;
  justify-content: center;
  padding: ${props => (props.first ? '150px 0 20px 0' : '50px 0 20px 0')};

  @media (max-width: 640px) {
    padding: ${props => (props.first ? '70px 0 0 0' : '50px 0 0 0')};
  }

`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
`;

interface TitleTextProps {
    first?: boolean;
}

export const TitleText = styled.h2<TitleTextProps>`
  margin: 0;
  text-align: left;
  font-size: ${props => (props.first ? '45px' : '30px')};
  line-height: ${props => (props.first ? '1.4' : '1')};
  
  @media (max-width: 640px) {
    font-size: ${props => (props.first ? '30px' : '30px')};
    line-height: ${props => (props.first ? '1.4' : '1')};
  }
  

`;
