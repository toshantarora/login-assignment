import React, {useState} from 'react'
import '../App.css'
import { Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import {url} from './SignUp';
const SignIn = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInButton() {
    let userValues  = {email, password};
    if (email === "" || password === "") {
      swal({
        icon: "warning",
        title: "Please enter Email-ID and Password",
      });
      return;
   }
   else{
    let result = await fetch(`${url}auth/login`, {
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json",
      },
      body: JSON.stringify(userValues)
    }).then( result => result.json())
    .then( result => localStorage.setItem("user-info", JSON.stringify(result)))
    .catch(error => console.log('error',error))

    // localStorage.setItem("token", result.token);
   
    history.push('/profile');
   }
  }
    return (
        <div style={{marginTop:"30px"}} className="App">
            <h1>Sign in</h1>
            <p>Welcome</p>
            <div>
                <form>
                    <div>
                    <label>
                       Gamil :
                        <input name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    </div>

                    <label>
                        password :
                        <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </label>


                   <div>
                   <Link to="/">
                <button onClick={signInButton}style={{margin:"5px", width:"100px", borderRadius:"50px", padding:"10px" ,border:"none", }}>
                  <span>Sign In</span>
                </button>
              </Link>
              <Link to="/signup">
                <button style={{margin:"5px", width:"100px", borderRadius:"50px", padding:"10px", border:"none"}}>
                  <span>Sign Up</span>
                </button>
              </Link>
                   </div>
                   <div>
                   <Link to="/forgotpassword">
                Forgot password
              </Link>
                   </div>
                </form>
            </div>  
        </div>
    )
}

export default SignIn
