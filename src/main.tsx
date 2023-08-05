import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import * as S from './global.styles';
import MessagesProvider from './context/MessagesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <S.Overall />
    <MessagesProvider>
      <App />
    </MessagesProvider>
  </React.StrictMode>,
);
