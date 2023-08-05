import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MessageInput } from '.';
import formatDate from '../../utils/formatDate';
import { MessageProps, MessagesContext } from '../../context/MessagesContext';

export default function Composition() {
  const [currMessage, setCurrMessage] = useState<string>('');
  const { setMessages } = useContext(MessagesContext);

  const handleMessageSend = (e: React.MouseEvent) => {
    e.preventDefault();

    const newMessage: MessageProps = {
      id: uuid(),
      user: 'Você',
      date: formatDate(new Date()),
      text: currMessage,
    };

    if (currMessage !== '') {
      setCurrMessage('');
      setMessages((prevState) => [...prevState, newMessage]);
    }
  };

  return (
    <MessageInput.Root>
      <MessageInput.Input
        props={{ currMessage, setCurrMessage, handleMessageSend }}
      />
      <MessageInput.Action props={{ handleMessageSend }} />
    </MessageInput.Root>
  );
}
