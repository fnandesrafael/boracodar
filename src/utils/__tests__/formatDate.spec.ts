import formatDate from '../formatDate';

describe('formatDate()', () => {
  it('should return a date as an "hh:mm format"', () => {
    const mock = new Date(2002, 6, 12, 12, 30);

    const sut = formatDate(mock);

    expect(sut).toBe('12:30');
  });
});
