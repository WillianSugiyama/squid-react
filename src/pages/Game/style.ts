import styled from 'styled-components';

interface Props {
  display: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const GameContainer = styled.div<Props>`
  width: 40%;
  height: ${(props) => (!props.display ? 'auto' : '70%')};
  display: ${(props) => (props.display ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const GameEndContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid white;
`;
