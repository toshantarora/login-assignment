import React, {useState} from 'react';
import '../App.css';
import { Link , useHistory} from 'react-router-dom';
import swal from 'sweetalert';


export const url = "http://a63b165b488d.ngrok.io/"
const SignUp = () => {

  let history = useHistory();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  

  async function RegisterButton() {
     let userData = {fname, lname, gender, email, phone, password, cpassword};

  
    if(password === cpassword  ){

        let result = await fetch(`${url}auth/signup`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(userData)
        });
   
        result = await result.json();
        console.log("result", result);
        history.push("/");
    }

  }
 
    return (
        <div  style={{marginTop:"30px"}} className="App">
            <h1>Sign Up</h1>
            <div >
                <form  style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                   <div>
                    <label>
                        Firstname : <input name="fname" type="text" value={fname} onChange={(e) => setFname(e.target.value)}></input>
                    </label>
                    <br />
                    <label>
                        Lastname  : <input name="lname" type="text" value={lname} onChange={(e) => setLname(e.target.value)}></input>
                    </label>
                    <br />
                    <label>
                        Gender :  
                          <label>
                          <input name="gender" type="radio" value="Male" checked={gender === "Male"}  onChange={(e) => setGender(e.target.value)}/>
                            Male
                          </label>
                          <label>
                          <input name="gender" type="radio" value="Female" checked={gender === "Female"}  onChange={(e) => setGender(e.target.value)}/>
                            Female
                          </label>
                    </label>
                    <br/>
                    <label>
                        Email : <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Phone : <input type="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>

                    </label>
                    <br />
                    <label>
                        Password : <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <br />
                    <label>
                        Confirm Password :<input type="password" name="password" value={cpassword} onChange={(e) => setCpassword(e.target.value)}/>
                    </label>
                    <div>   
                    <Link to="/signup">
                <button onClick={RegisterButton}   type="submit" style={{margin:"5px", width:"100px", borderRadius:"50px", padding:"10px", border:"none"}}>
                  <span>Submit</span>
                </button>
              </Link>
                    </div>
                   </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
