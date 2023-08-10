import { fireEvent, render } from '@testing-library/react';
import Action from '../fragments/Action';

describe('<MessageInput.Action />', () => {
  it('should be in the document', () => {
    const mock = jest.fn() as (
      e: React.MouseEvent | React.KeyboardEvent,
    ) => void;

    const { getByRole } = render(
      <Action props={{ handleMessageSend: mock }} />,
    );

    const sut = getByRole('button');

    expect(sut).toBeInTheDocument();
  });

  it('should execute "handleMessageSend" on click', () => {
    const mock = jest.fn() as (
      e: React.MouseEvent | React.KeyboardEvent,
    ) => void;

    const { getByRole } = render(
      <Action props={{ handleMessageSend: mock }} />,
    );

    const sut = getByRole('button');

    fireEvent.click(sut);

    expect(mock).toBeCalledTimes(1);
  });
});
