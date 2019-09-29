import {createAction} from "redux-actions";
import {LoginApi} from "@api/user"
const LOGIN_ACTION = createAction("login_action",data=>data);
export const LOGIN_ACTION_ASYNC = (values)=>{
    return async (dispatch)=>{
        let data = await LoginApi(values);
        dispatch(LOGIN_ACTION(data.data.info))
        if(data.data.code == 1){
            return true;
        }
    }
}