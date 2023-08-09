import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from '../fragments/Root';

describe('<Header.Root />', () => {
  it('should be in the document', () => {
    const mock = <span>children</span>;

    render(<Root>{mock}</Root>);
    const sut = screen.getByRole('banner');

    expect(sut).toBeInTheDocument();
  });
});
