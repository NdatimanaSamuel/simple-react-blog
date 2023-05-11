import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [email,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();

  const handleSubmit=(e)=>{
     e.preventDefault();
     const data={email,password};
    
     fetch('https://naughty-clam-clothes.cyclic.app/api/v1/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
         })
         .then((response)=>{
            return response.json();
         })
         .then((data)=>{
            console.log(data);
            // if(data.token){
            //     localStorage.setItem("authToken", data.token)
            //     history.push('/');
            // }
            
            if(data.message==='Invalid Login Credentials'){
                alert(data.message);
                history.push('/login');
            }
           
            else{
                history.push('/');
            }
         })
         .catch(err => alert(err))

  }
    return ( 
        <div>
            <h2>Login Here</h2>
            <form className="ourform"  onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input className="form-input" type="text" required value={email} onChange={(e)=> setUserName(e.target.value)}/>

        <label>Password:</label>
        <input className="form-input" type="password" value={password
        } onChange={(e)=>setPassword(e.target.value)} required/>

       <button className="btn-regsiter">Login</button>

        
      </form>
        </div>
       
     );
}
 
export default Login;