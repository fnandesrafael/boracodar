import { render } from '@testing-library/react';
import ContactAvatar from '../fragments/ContactAvatar';

describe('<ContactAvatar />', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<ContactAvatar />);

    const sut = getByRole('img');

    expect(sut).toBeInTheDocument();
  });

  it('should have alt equals to "Contact Profile Picture"', () => {
    const { getByRole } = render(<ContactAvatar />);

    const sut = getByRole('img');

    expect(sut).toHaveAttribute('alt', 'Contact Profile Picture');
  });
});
