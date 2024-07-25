import styled from "styled-components";

export const BulletList = styled.ul`
  list-style: none; 
  font-size: 18px;
  padding-left: 20px;
`;

export const BulletItem = styled.li`
  margin-bottom: 10px;
  list-style: none;
  position: relative;
  padding-left: 25px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwbW0iIGhlaWdodD0iMjAwbW0iIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHN0eWxlPSJmaWxsOiMwMDA7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjIuNjk5OTk7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kIiBkPSJtLTg1LjU5MyA5NC4wNjgtNzAuODE4LTQ1Ljc5Ny02OC40MiA0OS4zMDYgMjEuNjcxLTgxLjUwMy02OC4wMzUtNDkuODM2IDg0LjIxLTQuNTc1IDI2LjM3My04MC4xMDYgMzAuMzc0IDc4LjY3NiA4NC4zMzQuMzI3LTY1LjQzOSA1My4yeiIgZmlsbD0iIzAwMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIuNjk5OTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgdHJhbnNmb3JtPSJtYXRyaXgoLjg2NjMyIC4wMTgzNSAtLjAxODIgLjg0NDYgMjM4LjI1NCAxMTMuMTE5KSIvPjwvc3ZnPg==') no-repeat center center;
    background-size: contain;
  }
`;
