import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import MessagesProvider from './context/MessagesContext.tsx';

import * as S from './global.styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <S.Overall />
    <MessagesProvider>
      <App />
    </MessagesProvider>
  </React.StrictMode>,
);
