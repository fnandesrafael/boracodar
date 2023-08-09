import { render, waitFor } from '@testing-library/react';
import Root from '../fragments/Root';

describe('<MessageCard.Root />', () => {
  it('should be in the document rendering children', () => {
    const mock = <span>children</span>;

    const { getByText } = render(<Root>{mock}</Root>);

    const sut = getByText('children');

    expect(sut).toBeInTheDocument();
  });

  it('should start with scale 0', () => {
    const mock = <span>children</span>;

    const { getByText } = render(<Root>{mock}</Root>);

    const sut = getByText('children');

    expect(sut.parentNode).toHaveStyle({
      transform: 'scale(0) translateZ(0)',
    });
  });

  it('should animate scale to 1', async () => {
    const mock = <span>children</span>;

    const { getByText } = render(<Root>{mock}</Root>);

    const sut = getByText('children');

    expect(sut.parentNode).not.toHaveStyle({
      transform: 'none',
    });

    await waitFor(
      () => {
        expect(sut.parentNode).toHaveStyle({
          transform: 'none',
        });
      },
      { interval: 200 },
    );
  });
});
