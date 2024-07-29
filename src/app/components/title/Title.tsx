import React from 'react';
import { TitleProps } from "@/app/components/title/Title.types";
import { Container, TitleText, MainTitle, Wrapper } from "@/app/components/title/Title.styles";

const Title: React.FC<TitleProps> = ({ backgroundColor = '#f1f1f1', text, foregroundColor = '#505275', first }) => {
    return (
        <Container backgroundColor={backgroundColor} foregroundColor={foregroundColor} first={first}>
            <Wrapper>
                {first ? <MainTitle first={first}>{text}</MainTitle> : <TitleText first={first}>{text}</TitleText>}

            </Wrapper>
        </Container>
    );
};

export default Title;
