import { v4 as uuid } from 'uuid';
import { useContext, useState } from 'react';
import { MessageProps, MessagesContext } from '../context/MessagesContext';
import formatDate from '../utils/formatDate';

const useSendMessage = () => {
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

  return { currMessage, setCurrMessage, handleMessageSend };
};

export default useSendMessage;
