import { render } from '@testing-library/react';
import Composition from '.';

describe('<MessageCard />', () => {
  it("should be in the document with all it's fragments", () => {
    const mock = { id: '1', user: 'Foo', date: '00:00', text: 'Lorem ipsum' };

    const { getByRole, getByText } = render(<Composition props={mock} />);

    const root = getByRole('root');
    const info = getByText('Foo - 00:00');
    const text = getByText('Lorem ipsum');

    expect(root).toBeInTheDocument();
    expect(info).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
