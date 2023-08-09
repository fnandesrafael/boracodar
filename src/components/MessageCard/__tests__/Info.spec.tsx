import { render } from '@testing-library/react';
import Info from '../fragments/Info';

describe('<MessageCard.Info />', () => {
  it('should be in the document', () => {
    const mockDate = '00:00';
    const mockUser = 'Foo';
    const { getByText } = render(
      <Info>
        {mockDate} - {mockUser}
      </Info>,
    );

    const sut = getByText('00:00 - Foo');

    expect(sut.parentElement).toBeInTheDocument();
  });

  it('should be a paragraph rendering inner text "date - user" format', () => {
    const mockDate = '00:00';
    const mockUser = 'Foo';
    const { getByText } = render(
      <Info>
        {mockDate} - {mockUser}
      </Info>,
    );

    const sut = getByText('00:00 - Foo');

    expect(sut).toBeInstanceOf(HTMLParagraphElement);
    expect(sut).toHaveTextContent('00:00 - Foo');
  });
});
