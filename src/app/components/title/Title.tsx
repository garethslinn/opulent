import React from 'react';
import {TitleProps} from "@/app/components/title/Title.types";
import {Container, TitleText, Wrapper} from "@/app/components/title/Title.styles";
const Title: React.FC<TitleProps> = ({ backgroundColor = '#f1f1f1', text }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <Wrapper>
                <TitleText>{text}</TitleText>
            </Wrapper>
        </Container>
    );
};

export default Title;
