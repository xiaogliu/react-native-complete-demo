export function setUserInfo(userInfo) {
  return {
    type: 'SET_USER_INFO',
    userInfo,
  };
}
export function clearReduxStore() {
  return {
    type: 'CLEAR_REDUX_STORE',
  };
}
