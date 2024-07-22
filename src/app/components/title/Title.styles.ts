import styled from "styled-components";

export const Container = styled.div<{ backgroundColor: string }>`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  padding: 50px 0 20px 0;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

export const TitleText = styled.h2`
    margin: 0;
    text-align: left;
    font-size: 1.5em;
`;