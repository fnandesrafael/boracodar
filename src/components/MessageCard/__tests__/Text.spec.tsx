import { render } from '@testing-library/react';
import Text from '../fragments/Text';

describe('<MessageCard.Text />', () => {
  it('should be in the document', () => {
    const mockText = 'Lorem ipsum';
    const { getByText } = render(<Text>{mockText}</Text>);

    const sut = getByText('Lorem ipsum');

    expect(sut.parentElement).toBeInTheDocument();
  });

  it('should be a paragraph rendering the message', () => {
    const mockText = 'Lorem ipsum';
    const { getByText } = render(<Text>{mockText}</Text>);

    const sut = getByText('Lorem ipsum');

    expect(sut).toBeInstanceOf(HTMLParagraphElement);
    expect(sut).toHaveTextContent('Lorem ipsum');
  });
});
