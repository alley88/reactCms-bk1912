import {handleActions} from "redux-actions";


const defaultState = {
    username:sessionStorage.getItem("username")||"未登录",
    userPic:sessionStorage.getItem("userPic")||""
}

export default handleActions({
    login_action:(state,action)=>{
        let newUserState = Object.assign({},state);
        
        newUserState.username = action.payload.username;
        newUserState.userPic = action.payload.userPic;
        sessionStorage.setItem("username",action.payload.username);
        sessionStorage.setItem("userPic",action.payload.userPic);
        return newUserState;
    }
},defaultState)