import React, {useState} from 'react'
import './Forgot.css';
import swal from 'sweetalert';
import {url} from './SignUp';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
const ChangePassword = () => {
     let history = useHistory();

     const [temppassword, setTempPassword] = useState("");  
     const [newpassword, setNewPassword] = useState("");
     const [cpassword, setCpassword] = useState("");
      function ResetButton(e) {
        e.preventDefault();
        if (temppassword === "" || newpassword === "") {
            swal({
              icon: "warning",
              title: "Please enter Email-ID ",
            });
            return;
         }
         else{
           axios.post(`${url}password/resetpassword`, {temppassword: temppassword, newpassword:newpassword})
           .then(res => {
            if(res.status === 200) {
              localStorage.setItem('token', res['data'].accesstoken);
              localStorage.setItem('email', res['data'].email);
              swal({
                icon: "success",
                title: "Password Changed",
              });
              console.log(res);
              history.push('/')
          }
           })
           .catch(error => console.log("Error" , error))
       
         }

        
    }
    return (
        <div className="forgot-container">
            
             <div className="container">
               <div className="containers">
                  <div className="title">
                      <h1> Change Your Password</h1>
                  </div>
                  <form>
                  <div className="field" style={{ width:"98%", padding:"30px"}}>
                      <label className="label">Temp Password</label>
                    <div className="control">
                      <input type="password" name="temppassword" autoComplete="off" value={temppassword} onChange={(e) => setTempPassword(e.target.value)} className="input" required/>
                    </div>

                    <label className="label">New Password</label>
                    <div className="control">
                   
                      <input type="password" name="newpassword" autoComplete="off" value={newpassword} onChange={(e) => setNewPassword(e.target.value)} className="input"required/>
                    </div>

                    <label className="label">Confirm Password</label>
                    <div className="control">
                      <input type="password" autoComplete="off" value={cpassword} onChange={(e) => setCpassword(e.target.value)} className="input" name="cpassword"  required/>
                    </div>
                    


                    <div style={{marginTop:"20px"}}>

                    <button type="submit" onClick={ResetButton} className="button is-block is-info is-fullwidth">Change</button>
                    </div> 
                  </div>
                  </form>
               </div>
             </div>
            
        </div>
    )
}

export default ChangePassword;
