import React from 'react';
import Header from './components/Header/Composition';
import MessageInput from './components/MessageInput/Composition';

import * as S from './global.styles';

function App() {
  return (
    <S.AppWrapper>
      <Header />
      <MessageInput />
    </S.AppWrapper>
  );
}

export default App;
