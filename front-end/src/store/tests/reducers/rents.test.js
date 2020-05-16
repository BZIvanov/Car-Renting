import rentsReducer from '../../reducers/rents';

test('should setup defaul values', () => {
  const state = rentsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    loading: false,
    error: null,
  });
});

test('should setup values for rent start request', () => {
  const state = rentsReducer(undefined, { type: 'RENT_START' });
  expect(state).toEqual({
    loading: true,
    error: null,
  });
});

test('should equal true, when loading started', () => {
  const state = rentsReducer(undefined, { type: 'RENT_START' });
  expect(state.loading).toBe(true);
});
