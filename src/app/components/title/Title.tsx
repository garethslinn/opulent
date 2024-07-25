// src/app/components/title/Title.tsx
import React from 'react';
import { TitleProps } from "@/app/components/title/Title.types";
import { Container, TitleText, Wrapper } from "@/app/components/title/Title.styles";

const Title: React.FC<TitleProps> = ({ backgroundColor = '#f1f1f1', text, foregroundColor = '#505275', first }) => {
    return (
        <Container backgroundColor={backgroundColor} foregroundColor={foregroundColor} first={first}>
            <Wrapper>
                <TitleText first={first}>{text}</TitleText>
            </Wrapper>
        </Container>
    );
};

export default Title;