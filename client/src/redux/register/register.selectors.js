import { createSelector } from "reselect";

const selectRegister = (state) => state.register;

export const selectRegisterToken = createSelector(
  [selectRegister],
  (register) => register.token
);
