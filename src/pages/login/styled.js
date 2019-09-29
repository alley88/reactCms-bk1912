import styled from "styled-components"
import bg from "@/static/bg.jpg";
export const LoginWrapper = styled.div`
    width:100%;
    height:100%;
    background:url(${bg}) no-repeat;
    background-size:100% 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    .loginContainer{
        width:500px;
        height:300px;
        background:rgba(255,255,255,.3);
        padding:30px;
    }
    .logo{
        width:100%;
        height:50px;
        display:flex;
        justify-content:center;
        margin-bottom:20px;
        img{
            width:50px;
            height:50px;
        }
    }
`