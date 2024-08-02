import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
  justify-content: center;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  flex: 1 1 30%;
  max-width: 30%;

  @media (max-width: 900px) {
    max-width: 45%;
    flex: 1 1 45%;
  }

  @media (max-width: 600px) {
    max-width: 100%;
    flex: 1 1 100%;
  }
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const DescriptionList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
  margin-bottom: 10px;
`;

export const DescriptionItem = styled.li`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Level = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const LevelIndicator = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${props => (props.active ? '#4CAF50' : '#e0e0e0')};
`;
