import React, {useState, useEffect} from 'react'
import './Forgot.css';
import swal from 'sweetalert';
import {useHistory} from 'react-router-dom';
import {url} from './SignUp';
import axios from 'axios';

const ForgotPassword = () => {
    let history = useHistory();
    const [email, setEmail] = useState("");
    // const [errors, setErrors] = useState({});
    // const [isSubmitting, setIsSubmitting] = useState(false);

    // useEffect(() => {
    //     if(Object.keys(errors).length === 0 && isSubmitting)
    //     {
    //        callback();
    //     }
    // }, [errors])


    // function validate(email) {
    //     let errors = {};
    //     email = document.getElementById('email');
    //     if(!email){
    //         errors.email = 'Email is required';

    //     }
    //     else if (!/\S+@\S+\.\S+/.test(email)){
    //         errors.email = "Email address is invalid"
    //     }
    //     return errors;
    // }

    //Reset button function
  async function ResetButton() {
      //  e.preventDefault();
        if (email === "") {
            swal({
              icon: "warning",
              title: "Please enter Email-ID ",
            });
            return;
         }
        //  else if(validate) {
        //      setErrors(validate(email));
        //      setIsSubmitting(true);
            
        //  }
         else {

        axios.post(`${url}password/forgotpassword`, {email :email})
        .then(res => {
            if(res.status === 200) {
                localStorage.setItem('token', res['data'].accesstoken);
                localStorage.setItem('email', res['data'].email)
                history.push('/changepassword');
            }
            console.log(res);
        })
        .catch(error => console.log('error',error));
    }
    }
    return (
        <div className="forgot-container">
            
             <div className="container">
               <div className="containers">
                  <div className="title">
                      <h1>Yo ! Forgot Your Password</h1>
                      <div>
                      <p style={{fontSize:"14px", padding:"5px"}}>No worries Enter your Email and we will sent you a reset</p>
                      </div>
                  </div>
                  <form>
                  <div className="field" style={{ width:"98%", padding:"30px"}}>
                      <label className="label">Email</label>
                    <div className="control">
                   
                      <input id='email' value={email} type="email" autoComplete="off" className='input' name="email" onChange={(e) => setEmail(e.target.value)} required/>
                      {/* {
                          errors.email && (
                              <p className="help is-danger"> {errors.email}</p>
                          )
                      } */}
                   
                    </div>
                    <div style={{marginTop:"20px"}}>

                    <button type="submit" onClick={ResetButton} className="button is-block is-info is-fullwidth">Reset</button>
                    </div> 
                  </div>
                  </form>
               </div>
             </div>
            
        </div>
    )
}

export default ForgotPassword;
