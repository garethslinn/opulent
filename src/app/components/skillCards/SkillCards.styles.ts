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
    background: white;
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
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwbW0iIGhlaWdodD0iMjAwbW0iIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHN0eWxlPSJmaWxsOiMwMDA7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjIuNjk5OTk7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIiBkPSJtLTg1LjU5MyA5NC4wNjgtNzAuODE4LTQ1Ljc5Ny02OC40MiA0OS4zMDYgMjEuNjcxLTgxLjUwMy02OC4wMzUtNDkuODM2IDg0LjIxLTQuNTc1IDI2LjM3My04MC4xMDYgMzAuMzc0IDc4LjY3NiA4NC4zMzQuMzI3LTY1LjQzOSA1My4yeiIgZmlsbD0iIzAwMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIuNjk5OTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjMyIC4wMTgzNSAtLjAxODIgLjg0NDYgMjM4LjI1NCAxMTMuMTE5KSIvPjwvc3ZnPg==') no-repeat center center;
    background-size: contain;

  }
`;




export const SkillDescription = styled.p`
    margin: 0;
    font-size: 18px;

`;
