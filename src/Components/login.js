import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [logintitle , setLogintitle] = useState();
  const navigate = useNavigate();
  const handleSubmitRegister = (e) => {
    e.preventDefault();
     
    axios
      .post("http://localhost:8000/register", {email , password})
      .then((result) => {
        // console.log(result);
        alert("Registered");
      
        setEmail("");
        setPassword("");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
     
    axios
      .post("http://localhost:8000/login", {email , password})
      .then((result) => {
        // console.log(result);
        // alert("Registered");

        if(result.data === "Success"){
          navigate('/news')
        }else{
          alert(result.data);
          navigate('/')
        }
      
        
      })
      .catch((err) => console.log(err));
  };
  return (
    <center style={{"padding" :"5rem"}}>
      <h2>Register</h2>
      <form onSubmit={handleSubmitRegister}>
        <div className="form-group">
          <label for="email">Email  </label>
          <input type="email" className="form-control" id="email" style={{"marginLeft":"1.7rem"}} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="pwd">Password   </label>
          <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-default">
          Submit
        </button>
   </form>
        <br />
        <br />
        <br />
        <br />

      <h2>Login</h2>
      <form onSubmit={handleSubmitLogin}>
        <div className="form-group">
          <label for="email">Email </label>
          <input type="email" className="form-control" id="email"  style={{"marginLeft":"1.7rem"}} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label for="pwd">Password </label>
          <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-default">
          Submit
        </button>

      </form>
    </center>
   
  );
}
