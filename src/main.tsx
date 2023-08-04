import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import FilesProvider from './context/FilesContext';

import GlobalStyles from './global.styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <FilesProvider>
      <App />
    </FilesProvider>
  </React.StrictMode>,
);
