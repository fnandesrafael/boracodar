import React from 'react';
import { MessageProps } from '../../context/MessagesContext';
import { MessageCard } from '.';

type MessageCardProps = {
  props: MessageProps;
};

export default function Composition({
  props: { user, date, text },
}: MessageCardProps) {
  return (
    <MessageCard.Root>
      <MessageCard.Info>
        {user} - {date}
      </MessageCard.Info>
      <MessageCard.Text>{text}</MessageCard.Text>
    </MessageCard.Root>
  );
}
