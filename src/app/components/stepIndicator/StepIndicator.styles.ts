import styled from 'styled-components';

export const StepIndicatorWrapper = styled.div`
  margin: 20px;
`;

export const StepIndicatorList = styled.ol`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const StepIndicatorItem = styled.li<{ isCompleted: boolean; isCurrent: boolean }>`
  position: relative;
  flex: 1;
  text-align: center;
  background: ${({ isCurrent }) => (isCurrent ? '#e0e0e0' : 'white')};
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  span {
    color: ${({ isCompleted, isCurrent }) =>
    isCompleted ? 'green' : isCurrent ? 'black' : 'grey'};
    font-weight: ${({ isCurrent }) => (isCurrent ? 'bold' : 'normal')};
  }

  a {
    color: ${({ isCompleted }) => (isCompleted ? 'green' : 'black')};
    text-decoration: none;
    font-weight: ${({ isCompleted }) => (isCompleted ? 'bold' : 'normal')};
  }
`;

export const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const StepNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: black;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const CompletedTick = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: green;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const Arrow = styled.div`
  font-size: 24px;
  color: #ccc;
  margin: 0 5px;
`;
