import { v4 as uuid } from 'uuid';
import { useContext, useRef } from 'react';
import { MessageProps, MessagesContext } from '../context/MessagesContext';
import formatDate from '../utils/formatDate';

const useSendMessage = () => {
  const messageRef = useRef<HTMLInputElement>(null);
  const { setMessages } = useContext(MessagesContext);

  const handleMessageSend = (e: React.MouseEvent) => {
    e.preventDefault();

    const newMessage: MessageProps = {
      id: uuid(),
      user: 'Você',
      date: formatDate(new Date()),
      text: messageRef.current.value,
    };

    if (messageRef.current.value !== '') {
      messageRef.current.value = '';
      setMessages((prevState) => [...prevState, newMessage]);
    }
  };

  return { messageRef, handleMessageSend };
};

export default useSendMessage;
