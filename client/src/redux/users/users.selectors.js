import { createSelector } from "reselect";

const selectUsers = (state) => state.users;

export const selectUsersCollection = createSelector([selectUsers], (users) =>
  users.allLoadedUsers
    ? users.allLoadedUsers.sort(
        (a, b) => b.registration_timestamp - a.registration_timestamp
      )
    : users.allLoadedUsers
);

export const selectUsersCollectionLength = createSelector(
  [selectUsers],
  (users) => users.allLoadedUsers.length
);

export const selectUsersLoading = createSelector(
  [selectUsers],
  (users) => users.isLoading
);

export const selectUsersNextUri = createSelector(
  [selectUsers],
  (users) => users.nextPageUri
);
