import React from 'react';
import { MessageInput } from '.';

export default function Composition() {
  return (
    <MessageInput.Root>
      <MessageInput.Input />
      <MessageInput.Action />
    </MessageInput.Root>
  );
}
