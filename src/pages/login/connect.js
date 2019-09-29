import {connect} from "react-redux"
import {LOGIN_ACTION_ASYNC} from "@actions/user"
import {message} from "antd";
const mapStateToProps = ()=>({

})

const mapDispatchToProps = (dispatch)=>({
    handleLogin(e){
        e.preventDefault(); 
        //可以获取到表单中的内容
        this.props.form.validateFields(async (err, values) => {
            if(!err){
              let data = await dispatch(LOGIN_ACTION_ASYNC(values))
              if(data){
                message.success("登陆成功",1.5,()=>{
                    this.props.history.push("/home");
                })   
              }
            }
        })  
    }
})


export default connect(mapStateToProps,mapDispatchToProps)