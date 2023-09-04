import { createReducer, on } from "@ngrx/store";
import { LoginState } from "./LoginState";
import { recoverPassword, recoverPasswordSuccess, recoverPassworddFail } from "./login.action";
import { AppInitialState } from "../AppInitialState";

const initialState: LoginState=AppInitialState.login;

const reducer = createReducer(initialState,
  on(recoverPassword, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: false,
      isRecoveringPassword: true
    };
  }),
  on(recoverPasswordSuccess, currentState => {
    return {
      ...currentState,
      error: null,
      isRecoveredPassword: true,
      isRecoveringPassword: false
    };
  }),
  on(recoverPassworddFail, (currentState, action) => {
    return {
      ...currentState,
      error: action.error,
      isRecoveredPassword: false,
      isRecoveringPassword: false
    };
  })

  )

  export function loginReducer(state: LoginState, action){
    return reducer(state, action)
  }
