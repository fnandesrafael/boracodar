import { render } from '@testing-library/react';
import Action from '../fragments/Action';

describe('<Header.Action />', () => {
  it('should be in the document', () => {
    const { getByRole } = render(<Action />);

    const sut = getByRole('button');

    expect(sut).toBeInTheDocument();
  });
});
