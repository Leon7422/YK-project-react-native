import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  nickName: null,
  currentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickName: payload.nickName,
    }),
    authCurrentUser: (state, { payload }) => ({
      ...state,
      currentUser: payload,
    }),
    authLogOut: () => state,
  },
});
