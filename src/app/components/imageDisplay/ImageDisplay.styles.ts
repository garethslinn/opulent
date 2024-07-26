import styled from 'styled-components';

export const ImageDisplayContainer = styled.div<{ imageRight: boolean }>`
    display: flex;
    flex-direction: ${({ imageRight }) => (imageRight ? 'row-reverse' : 'row')};
    align-items: start;
    justify-content: space-between;
    max-width: 1024px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 18px;
`;

export const ImageWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 12px;
    }
`;

export const ContentWrapper = styled.div`
    width: 50%;
    padding: 20px;

    h2 {
        font-family: 'Roboto-bold', sans-serif;
        font-size: 30px;
        margin-bottom: 20px;
    }

    div {
        font-size: 20px;
        line-height: 2;
    }
`;
