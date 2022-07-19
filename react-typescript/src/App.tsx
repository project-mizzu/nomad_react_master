import React from 'react';
import styled from 'styled-components';
import Circle from './components/Circle';

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="black" />
      <Circle text="here" bgColor="tomato" />
    </div>
  );
}

export default App;
