import { useState } from "react";

export default function Login({setUser}){
     const[email,setEmail]=useState(``)
     const[password,setPassword]=useState(``)
     function manageLogin(et){
        setEmail(et.target.value);

     }
     function managePassword(et){
        setPassword(et.target.value);

     }
     return(
        <form onSubmit={et=>{et.preventDefault(); setEmail(email);setPassword(password); setUser(email);}}>
                <label htmlForm="Email">Email-</label>
                <input type="email" value={email} onChange={manageLogin} id="Email-"/>
                <label htmlForm="Password">Password-</label>
                <input type="password" value={password} onChange={managePassword} id="Password-"/>
                <input type="submit" value="login" disabled={email.length===0 || password.length===0} />
        </form>
        
     )
}