import { MessageInput } from '.';
import useSendMessage from '../../hooks/useSendMessage';

export default function Composition() {
  const { messageRef, handleMessageSend } = useSendMessage();

  return (
    <MessageInput.Root props={{ handleMessageSend }}>
      <MessageInput.Input props={{ messageRef }} />
      <MessageInput.Action props={{ handleMessageSend }} />
    </MessageInput.Root>
  );
}
