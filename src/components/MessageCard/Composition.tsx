import React from 'react';
import { MessageCard } from '.';

export default function Composition() {
  return (
    <MessageCard.Root>
      <MessageCard.Info />
      <MessageCard.Text />
    </MessageCard.Root>
  );
}
