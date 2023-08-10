import { render } from '@testing-library/react';
import Composition from '.';

describe('<Header />', () => {
  it("should be in the document with all it's fragments", () => {
    const { getByRole, getByText } = render(<Composition />);

    const root = getByRole('banner');
    const avatar = getByRole('img');
    const infoName = getByRole('heading', { level: 3 });
    const infoStatus = getByText('Online');
    const action = getByRole('button');

    expect(root).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(infoName).toBeInTheDocument();
    expect(infoStatus).toBeInTheDocument();
    expect(action).toBeInTheDocument();
  });
});
