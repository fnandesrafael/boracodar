import React from 'react';
import Header from './components/Header/Composition';
import MessageCard from './components/MessageCard/Composition';
import MessageInput from './components/MessageInput/Composition';

import * as S from './global.styles';

function App() {
  return (
    <S.AppWrapper>
      <Header />
      <S.MessageHistory>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </S.MessageHistory>
      <MessageInput />
    </S.AppWrapper>
  );
}

export default App;
