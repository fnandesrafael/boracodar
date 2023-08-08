import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from '../Root';

describe('Root', () => {
  test('should be in the document', () => {
    render(
      <Root>
        <span>Foo</span>
      </Root>,
    );

    const element = screen.getByText('Foo');

    expect(element).toBeInTheDocument();
  });
});
