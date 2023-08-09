import React, { useContext } from 'react';
import Header from './components/Header/Composition';
import MessageCard from './components/MessageCard/Composition';
import MessageInput from './components/MessageInput/Composition';
import { MessagesContext } from './context/MessagesContext';

import * as S from './global.styles';

function App() {
  const { messages } = useContext(MessagesContext);

  return (
    <S.AppWrapper>
      <Header />
      <S.MessageHistoryContainer>
        {messages.map((message) => (
          <MessageCard key={message.id} props={{ ...message }} />
        ))}
      </S.MessageHistoryContainer>
      <MessageInput />
    </S.AppWrapper>
  );
}

export default App;
