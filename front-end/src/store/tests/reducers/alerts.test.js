import alertsReducer from '../../reducers/alerts';

test('should setup defaul values', () => {
  const state = alertsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set an alert', () => {
  const alert = {
    id: '123',
    message: 'Hello',
    alertType: 'success',
  };

  const state = alertsReducer([], { type: 'SET_ALERT', payload: alert });
  expect(state).toEqual([alert]);
});
