import { render } from '@testing-library/react';
import ContactInfo from '../fragments/ContactInfo';

describe('<ContactInfo />', () => {
  it('should have an h3 children with the contact name', () => {
    const { getByRole } = render(<ContactInfo />);

    const sut = getByRole('heading', { level: 3 });

    expect(sut).toBeInTheDocument();
    expect(sut).toHaveTextContent('Pope Francis');
  });

  it('should have an paragraph children with the contact activity status', () => {
    const { getByText } = render(<ContactInfo />);

    const sut = getByText('Online');

    expect(sut).toBeInTheDocument();
  });
});
