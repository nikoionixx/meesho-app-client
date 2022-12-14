import { UserActionTypes } from "../../constants/user/user.types";


const initialState = {};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UserActionTypes.SET_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
