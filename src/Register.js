import { useState } from "react";

export default function Register({setUser}){
     const[Name,setName]=useState(``)
     const[Email,setEmail]=useState(``)
     const[Password,setPassword]=useState(``)
     const[ConfirmPassword,setConfirmPassword]=useState(``)
     function manageName(et){
        setName(et.target.value);
     }
     function manageEmail(et){
        setEmail(et.target.value);
     }
     function managePassword(et){
        setPassword(et.target.value);
     }
     function manageConfirmPassword(et){
        setConfirmPassword(et.target.value);
     }
     return(
        <form onSubmit={et=>{et.preventDefault(); setName(Name);setEmail(Email); setPassword(Password); setConfirmPassword(ConfirmPassword);setUser(Email);}}>
                <label htmlForm="Name">Name-</label>
                <input type="Name" value={Name} onChange={manageName} id="Name-"/>
                <label htmlForm="Email">Email-</label>
                <input type="Email" value={Email} onChange={manageEmail} id="Email-"/>
                <label htmlForm="Password">Password-</label>
                <input type="Password" value={Password} onChange={managePassword} id="Password-"/>
                <label htmlForm="ConfirmPassword">Confirm Password-</label>
                <input type="password" value={ConfirmPassword} onChange={manageConfirmPassword} id="ConfirmPassword"/>
                <input type="submit" value="register" disabled={Name.length===0 || Email.length===0 || Password.length===0 || ConfirmPassword!==Password}  />
        </form>
        
     )
}

