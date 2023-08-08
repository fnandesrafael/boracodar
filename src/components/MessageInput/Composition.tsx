import { MessageInput } from '.';
import useSendMessage from '../../hooks/useSendMessage';

export default function Composition() {
  const { currMessage, setCurrMessage, handleMessageSend } = useSendMessage();

  return (
    <MessageInput.Root>
      <MessageInput.Input
        props={{ currMessage, setCurrMessage, handleMessageSend }}
      />
      <MessageInput.Action props={{ handleMessageSend }} />
    </MessageInput.Root>
  );
}
