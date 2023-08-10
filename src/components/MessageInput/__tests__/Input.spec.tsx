import { render } from '@testing-library/react';
import { useRef } from 'react';
import Input from '../fragments/Input';

jest.mock('react', () => {
  const originReact = jest.requireActual('react');
  const useRefMock = jest.fn();
  return {
    ...originReact,
    useRef: useRefMock,
  };
});

describe('<MessageInput.Input />', () => {
  it('should be in the document', () => {
    const mockRef = useRef();

    const { getByRole } = render(<Input props={{ messageRef: mockRef }} />);

    const sut = getByRole('textbox');

    expect(sut).toBeInTheDocument();
  });

  it('should be an input of type "text"', () => {
    const mockRef = useRef();

    const { getByRole } = render(<Input props={{ messageRef: mockRef }} />);

    const sut = getByRole('textbox');

    expect(sut).toBeInstanceOf(HTMLInputElement);
    expect(sut).toHaveAttribute('type', 'text');
  });

  it('should have placeholder "Digite sua mensagem"', () => {
    const mockRef = useRef();

    const { getByRole } = render(<Input props={{ messageRef: mockRef }} />);

    const sut = getByRole('textbox');

    expect(sut).toHaveAttribute('placeholder', 'Digite sua mensagem');
  });
});
