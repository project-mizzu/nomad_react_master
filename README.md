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
<summary>0718</summary>
<div markdown="1">

**[Pseudo-selectors]**

- styled-components 내에 sass 문법을 활용하여 작성할 수 있다.
  - &은 pseudo selector를 작성할 수 있다. ex) &:hover{}
- tag name을 ${Component}로 작성해주면, 스타일드 컴포넌트 내에 다른 스타일드 컴포넌트를 작성할 수 있다.

  ```javaScript
  const Box = styled.div`
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
  `;
  ```

  <br>

**[Themes]**

- 다크모드 등은 50% 정도는 theme의 역할이다.
- 나머지는 Local Estate Management의 역할 (나중에 배울예정)
- **theme** : 모든 색상들을 가지고 있는 object
- index.js에 import { ThemeProvider } from 'styled-components'; 설치 후,
- \<App /> 컴포넌트를 \<ThemeProvider>\</ThemeProvider> 사이에 감싸준다.
- ThemeProvider 컴포넌트는 theme prop을 필수로 가진다.
- App.js 내의 컴포넌트 들에서 props로 theme을 넘겨줄 수 있다. ex) ${(props) => props.theme.backgroundColor};`

</div>
</details>

<details>
<summary>0719</summary>
<div markdown="1">

[**TypeScript**]

- 타입스크립트는 strongly-typed(프로그래밍 언어가 작동하기 전에 type을 확인하는) 언어다.
- const plus = (a:number. b:number) => a + b;
- npx create-react-app my-app --template typescript
- 자바스크립트로 만들어진 라이브러리를 사용할 때, 충돌이 발생할 수 있다. ex) styled-components
  - npm i --save-dev @types/styled-components
- 우리가 TypeScript를 사용하는 이유는 코드가 실행되기 전에 오류를 확인할 수 있기 때문이다.
- **interface** : object shape(객체모양)을 TypeScript에 설명해주는 타입스크립트의 개념

  ```javaScript
  interface CircleProps {
    bgColor: string;
  }

  function Circle({bgColor}:CircleProps) {
    return <Container />;
  }
  ```

- **optional props** : 필수가 아닌 선택적 props로 설정하려면 ? 만 작성해주면 된다.
  ```javaScript
  interface CircleProps {
    bgColor: string;
    borderColor?: string;
  }
  ```
- borderColor={borderColor ?? 'yellow'}의 형태로 undefined 일 때 사용될 기본값을 지정할 수 있다.

</div>
</details>

<details>
<summary>0727</summary>
<div markdown="1">

[**TypeScript**]

- state의 default value를 통해 타입스크립트는 자동 타입 추론을 한다.
- const [value, setValue] = useState\<number|string>(0) 으로 작성하면 여러 타입 적용가능
- 하지만 보통 state를 만들면 한가지 타입이 유지되기 때문에, 잘 사용할 일은 없다.

  ```javaScript
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
      const {
        currentTarget: { value },
      } = event;
      setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('hello', value);
    };
  ```

- React에서 event의 타입은 event: React.FormEvent\<HTMLFormElement> 로 작성

- **styled.d.ts** : styled components의 테마 정의 확장

</div>
</details>

<details>
<summary>0816</summary>
<div markdown="1">

- GlobalStyle을 통해 전역 스타일 설정을 할 수 있다.
- import { createGlobalStyle } from 'styled-components';
- Fragment(유령 컴포넌트) <></>
- {&rarr + ;} 오른쪽 화살표
- (async => {...})(); 형태로 사용하면 함수 즉시실행
- arr.slice()를 통해 원하는 만큼만 자를 수 있다.

  ```javaScript
  <Link
    to={{
      pathname: `/${coin.id}`,
      state: { name: coin.name },
    }}
  >
  ```

- Link에 state를 작성하여, 다른 화면으로 전환할 때 해당 데이터를 같이 넘길 수 있다.
- useLocation()을 통해 react router DOM이 보내주는 location object에 접근할 수 있다.
- 이미 코인의 name을 가지고 있기 때문에, API가 줄 때까지 기다릴 필요가 없다.

[**Nested Router**]

- route안에 있는 또 다른 route를 의미한다.
- 웹사이트에서 탭을 사용할 때 등 유용하게 활용할 수 있다.

<br>

- useRouteMatch는 특정한 URL에 존재하고 있는지 여부를 알려준다.

</div>
</details>

<details>
<summary>08??</summary>
<div markdown="1">

</div>
</details>
