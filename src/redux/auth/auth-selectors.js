const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsLoading = state => state.auth.isLoading;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
  getIsLoading,
};
export default authSelectors;
