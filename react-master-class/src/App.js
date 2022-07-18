import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;
/* const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }
  100% {
    transform:rotate(0deg);
    border-radius:0px;
  }
`; */
/* const Emoji = styled.span`
  font-size: 36px;
`; */
/* const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${animation} 1s linear infinite;
  ${Emoji} {
    font-size: 48px;
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0;
    }
  }
`; */

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;
