import { fireEvent, render } from '@testing-library/react';

import Root from '../fragments/Root';

describe('<MessageInput.Root/>', () => {
  it('should be in the document', () => {
    const inputMock = <input type="text" />;
    const functionMock = jest.fn();

    const { getByRole } = render(
      <Root props={{ handleMessageSend: functionMock }}>{inputMock}</Root>,
    );

    const sut = getByRole('textbox');

    expect(sut.parentNode).toBeInstanceOf(HTMLFormElement);
    expect(sut.parentNode).toBeInTheDocument();
  });

  it("should call 'handleMessageSend' on submit", () => {
    const inputMock = <input type="text" />;
    const functionMock = jest.fn();

    const { getByRole } = render(
      <Root props={{ handleMessageSend: functionMock }}>{inputMock}</Root>,
    );

    const sut = getByRole('textbox');

    fireEvent.submit(sut);

    expect(functionMock).toBeCalledTimes(1);
  });
});
