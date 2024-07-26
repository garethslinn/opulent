import styled from "styled-components";

export const TabButtons = styled.div`
  display: flex;
  justify-content: start;
  max-width: 1024px;
  margin: 0 auto 10px auto;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: ${(props) => (props.isActive ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.isActive ? '#fff' : '#000')};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TabImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const TabContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
`;
