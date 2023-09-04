
import {createAction, props} from "@ngrx/store"

export const recoverPassword = createAction("[Recover password]");
export const recoverPasswordSuccess = createAction("[Recover password] success")
export const recoverPassworddFail = createAction("[Recover password] fail", props<{error:any}>());

