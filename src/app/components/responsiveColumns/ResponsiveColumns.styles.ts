// components/ResponsiveColumns.styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  position: relative;
`;

export const Column = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 21%; /* 4 columns */
  margin: 10px;
  padding: 20px;
  max-width: 21%;
  position: relative;
  padding-bottom: 60px; /* Add padding to accommodate the link */

  @media (max-width: 1100px) {
    flex: 1 1 45%; /* 2 columns */
    max-width: 45%;
  }

  @media (max-width: 650px) {
    flex: 1 1 100%; /* 1 column */
    max-width: 100%;
    margin: 10px 0;
  }
`;

export const Logo = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
  background-color: #f0f0f0; /* Placeholder for logo */
`;

export const Paragraph = styled.p`
  margin-bottom: 15px;
  font-size: 28px;
`;

export const LearnMoreLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 5px 20px;
  display: inline-block;
  color: #fff;
  background: #505275;
  position: absolute;
  bottom: 20px; /* Adjust to ensure the link is within the column */
  left: 20px;
  right: 20px;
  text-align: left;
  width: 122px;
`;
