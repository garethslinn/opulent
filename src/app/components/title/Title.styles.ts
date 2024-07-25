// src/app/components/title/Title.styles.ts
import styled from "styled-components";

export const Container = styled.div<{ first?: boolean }>`
  font-family: 'Roboto-bold', sans-serif;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foregroundColor};
  display: flex;
  justify-content: center;
  padding: ${props => (props.first ? '150px 0 20px 0' : '50px 0 20px 0')};
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

export const TitleText = styled.h2<{ first?: boolean }>`
    margin: 0;
    text-align: left;
    font-size: ${props => (props.first ? '45px': '30px')};
    line-height: ${props => (props.first ? '1.4': '1')};
`;
