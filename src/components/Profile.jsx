import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import '../App.css';
import {url} from './SignUp';
const Profile = () => {
    let history = useHistory();
    const [profile, setProfile] = useState([]);
    const [email, setEmail] = useState("");
    const [accesstoken, setToken] = useState("");

    useEffect(() => {
        getData();
        
    }, [profile]);

    function getData() {
        let data = JSON.parse(localStorage.getItem("user-info"));     
//         const requestOptions = { method: 'GET', headers: authHeader() };
//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }
        // console.log(data.token) 
        setToken(data.accesstoken);
        setEmail(data.email);    
    }

    function getProfile() {
        const requestOptions = {method:'GET' , headers:{
              email: email,
              accesstoken: accesstoken
        }};
        return fetch(`${url}profile/showprofile`, requestOptions)
        .then(res => res.json())
        .then(user => {setProfile(user['data'])
             console.log(user['data']) })
        .catch(err => console.log(err))
    }

    async function getLogout() {

        const requestOptions = {method:'POST', headers:{
            accesstoken: accesstoken,
            email: email,      
      },
    };
      return fetch(`${url}auth/logout`, {}, requestOptions)
      .then(res => res.json())
      .then(localStorage.clear(), history.push('/'))
      .catch(err => console.log(err))   
    }
  
    return (
        <div className="App">
           <div style={{display:'flex', flexDirection:'row', justifyContent:'center' , alignItems:'center'}}>
           {/* <h1 style={{fontSize:'3rem'}}>Profile</h1>  */}
           <button onClick={getProfile}>Profile</button>
           <button onClick={getLogout} style={{marginLeft:"40px"}} type="submit">Logout</button>
           </div>
              
           <div>
               {
                  
                   profile.map((val, index) => {
                       return(<div key={index}>
                                <p>{val.firstname}</p>
                                <p>{val.lastname}</p>
                                <p>{val.email}</p>
                                <p>{val.gender}</p>
                                <p>{val.phone}</p>
                           </div>)
                   })

                //    <p>No data found</p>
               }
           </div>

            
        </div>
    )
}

export default Profile
