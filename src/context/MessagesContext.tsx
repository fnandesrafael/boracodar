import React, { createContext, useState } from 'react';

export type MessageProps = {
  user: string;
  date: string;
  text: string;
};

type MessagesContextProps = {
  messages: Array<MessageProps>;
  setMessages: React.Dispatch<React.SetStateAction<Array<MessageProps>>>;
};

export const MessagesContext = createContext<MessagesContextProps>(null);

export default function MessagesProvider({ children }) {
  const [messages, setMessages] = useState<Array<MessageProps>>([]);

  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}
