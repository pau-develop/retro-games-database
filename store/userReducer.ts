import { createReducer } from "@reduxjs/toolkit";
import { IUser, IUserAction } from "interfaces/interfaces";
import actionTypes from "./actionTypes";

const initialState: IUser = {
  userName: "",
  email: "",
  verified: false,
  token: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    actionTypes.loginUser,
    (state: IUser, action: IUserAction) => action.payload
  );
  builder.addCase(
    actionTypes.logoutUser,
    (state: IUser, action: IUserAction) => action.payload
  );

  builder.addDefaultCase((state: IUser) => state);
});

export default userReducer;
