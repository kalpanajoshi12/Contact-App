import React from 'react'
import { useNavigate } from 'react-router-dom'



function Login() {
  const navi = useNavigate()
 function gotoLoginPage(){
   navi("/login")
 }

  return (
    <>
       <button style={{width:"100px",height:"30px",fontFamily:"cursive",fontWeight:"bold",fontSize:"18px",border:"1px solid black", borderRadius:"8px"}} onClick={gotoLoginPage} >Login</button>
       <h1>I am from Login component</h1>
    </>
  )
}

export default Login
