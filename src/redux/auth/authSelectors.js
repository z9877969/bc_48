// export const selectorIsAuth = (state) => state.auth.isAuth;
export const selectorIsAuth = (state) => Boolean(state.auth.idToken);
export const selectIsLocalId = (state) => Boolean(state.auth.localId);
