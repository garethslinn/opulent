import styled from 'styled-components';

export const GridContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 0 2px 0;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const SkillCard = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
`;

export const SkillTitle = styled.h3`
  font-family: 'Roboto-bold', sans-serif;
  font-size: 20px;
  margin-bottom: 10px;
  position: relative;
  padding-left: 25px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0; 
    transform: translateY(0);
    width: 20px;
    height: 20px;
    background: ${({ theme }) => `
      url('data:image/svg+xml;base64,${btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="20mm" height="20mm" viewBox="0 0 200 200">
          <path d="m-85.593 94.068-70.818-45.797-68.42 49.306 21.671-81.503-68.035-49.836 84.21-4.575 26.373-80.106 30.374 78.676 84.334.327-65.439 53.2z"
            style="fill:${theme.colors.black};stroke:none;stroke-width:2.69999;stroke-linecap:round;stroke-linejoin:round"
            transform="matrix(.86632 .01835 -.01882 .8446 238.254 113.119)"/>
        </svg>
      `)}') no-repeat center center;
    `};
    background-size: contain;
  }
`;

export const SkillDescription = styled.p`
    margin: 0;
    font-size: 18px;
`;
