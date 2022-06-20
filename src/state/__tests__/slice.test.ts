import { initialState, authSlice, loginSuccess, setDelete } from '../slice';

describe('Registration Success reducer', () => {
  const token = '1234';
  const user = 'smoking';

  it('Dispatches mock user value and mock token', () => {
    expect(
      authSlice.reducer(initialState, loginSuccess({ user, token }))
    ).toEqual({
      loggedIn: true,
      token: token,
      user: [user],
    });
  });
  it('Not giving reducer any arguments should return to this', () => {
    expect(authSlice.reducer(undefined, loginSuccess({}))).toEqual({
      loggedIn: true,
      token: undefined,
      user: [],
    });
  });
  it('Dispatches a mock value to setDelete', () => {
    expect(authSlice.reducer(initialState, setDelete(user))).toEqual({
      ...initialState,
      user: user,
    });
  });
});
