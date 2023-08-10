import { render } from '@testing-library/react';
import Composition from '.';

jest.mock('../../hooks/useSendMessage', () => () => ({
  handleMessageSend: jest.fn(),
}));

describe('<MessageInput />', () => {
  it("should be in the document with all it's fragments", () => {
    const { getByRole } = render(<Composition />);

    const input = getByRole('textbox');
    const root = input.parentNode;
    const action = getByRole('button');

    expect(root).toBeInstanceOf(HTMLFormElement);
    expect(root).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(action).toBeInTheDocument();
  });
});
