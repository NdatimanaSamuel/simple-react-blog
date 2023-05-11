import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Register = () => {

    
        const [fullname,setFullName]=useState('');
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const history=useHistory();

const handleSubmit =(e)=>{
    e.preventDefault();

    const data={fullname,email,password};
     
    console.log(data);
 
    fetch('https://naughty-clam-clothes.cyclic.app/api/v1/signup',{
        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
     }).then((response) =>{
        return response.json();
        
     })
     .then((data)=>{
       alert(data.message);
       
       history.push('/login');
     })
     .catch(error =>alert(error))
     
    }
    return ( 
        <div>
            <h2>Register New User</h2>
            <form className="ourform" onSubmit={handleSubmit}>
        <label>Names:</label>
        <input className="form-input" type="text" required value={fullname} 
          onChange={(e)=> setFullName(e.target.value)}/>
        <label>UserName:</label>
        <input className="form-input" type="text" required value={email} 
          onChange={(e)=> setEmail(e.target.value)}/>

        <label>Password:</label>
        <input className="form-input" type="password" required value={password} 
          onChange={(e)=> setPassword(e.target.value)}/>

       <button className="btn-regsiter">Register</button>

        
      </form>
        </div>
     );
}
 
export default Register;