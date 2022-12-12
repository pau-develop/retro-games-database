import { IUser } from "interfaces/interfaces";
import { createAction } from "@reduxjs/toolkit";
import actionTypes from "./actionTypes";

export const loginUserAction = createAction<IUser>(actionTypes.loginUser);
