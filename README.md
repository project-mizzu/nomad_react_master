# nomad_react_master

<details>
<summary>0715</summary>
<div markdown="1">

**[Styled Components]**

- npm install styled-components
- import styled from "styled-components"

<br>

- const [Name] = styled.[div]`[css]`의 형태로 스타일드 컴포넌트 작성
- \<Name /> or \<Name>\</Name> 일반 컴포넌트 형태로 사용
- 컴포넌트를 확장하는 방법? props 이용 ex) background-color: ${(props) => props.bgColor}
  ```javaScript
  const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 100px;
    height: 100px;
  `;
  const Circle = styled(Box)`
    border-radius: 50px;
  `;
  ```

<br>

**[코드 중복을 줄이는 방법]**

- styled(component-name)``의 형태로 중복되는 css코드를 줄일 수 있고, 추가할 수 있다.
- **as** : 스타일드 컴포넌트로 작성된 html 태그를 변경할 수 있다.
- **attrs()** : 전체 컴포넌트에 중복되어 사용되는 속성이 있다면, 스타일드 컴포넌트 자체에 작성할 수 있다.
  ```javaScript
  const Input = styled.input.attrs({ required: true, minLength: 10 })`
  ```

<br>

**[Animation]**

- styled component 안에서 animation을 주는 방법은, helper function을 import 해주는 것이다.
- import styled, { keyframes } from 'styled-components'
  ```javaScript
  const animation = keyframes`
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  `;
  const Box = styled.div`
    height: 200px;
    width: 200px;
    background-color: tomato;
    animation: ${animation} 1s linear infinite;
  `;
  ```

</div>
</details>

<details>
<summary>07??</summary>
<div markdown="1">

</div>
</details>
