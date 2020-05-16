import { rentStart } from '../../actions/rent';

test('should return object containing rent start data', () => {
  const result = rentStart();
  expect(result).toEqual({
    type: 'RENT_START',
  });
});
