import React, { useState } from "react";
import "./SignUp.css";
import hide from "../../Images/hide.png"
import show from "../../Images/view.png"
export default function SignUp() {
    const[name , setName]=useState()
    const[email , setEmail] = useState()
    const[password , setPassword] = useState()
    const[confirmPassword , setConfirmPassword]=useState()
    const[showPassword ,setShowPassword]= useState(false)
    const[showConfirmPassword ,setshowConfirmPassword] = useState(false)

    const[error , setError] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""})
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for valid email
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    
    const validate=()=>{
        let valid = true;
        const newerror = { name: "", email: "", password: "", confirmPassword: "" };
         
        if (name?.trim() === ""){
            newerror.name = "Name is required"
            valid = false
         }

        //  email
        if(email?.trim() === ""){
            newerror.email()
            valid = false
        }else if(!emailRegex.test(email)){
            newerror.email="please enter correct email ID"
            valid = false
        }

       //passsword ]1`  
        if(password?.trim() === ""){
            newerror.password()
            valid=false
        }else if(!passwordRegex.test(password)){
            newerror.password="Password id not valid "
            valid=false
        }

        //confirm password 
       if(confirmPassword?.trim() === ""){
             newerror.confirmPassword() 
             valid = false
        }else if(password !== confirmPassword){
             newerror.confirmPassword="Password is not match"
             valid = false
        }
      setError(newerror) 
      return valid;
    }

    const handleClick=(e)=>{
       e.preventDefault()
       if(validate()){
        console.log(email ,name,password,confirmPassword)
       }
      console.log(email ,name,password,confirmPassword)
    }
    const showToggleEye=()=>{
       setShowPassword(!showPassword)
    }
    const ShowConfirmToggleEye=()=>{
        setshowConfirmPassword(!showConfirmPassword)
    }
  return (
    <div className="signupcontainer">
      <form className="signup-form">
        <div className="input-group">
          {/* <label htmlFor="name">Full Name</label> */}
          <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your name"
          />
          {error.name && <span className="error-message">{error.name}</span>}
          </div>
        </div>

        <div className="input-group">
          {/* <label htmlFor="email">Email Address</label> */}
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your email"
          />
           {error.email && <span className="error-message">{error.email}</span>}
        </div>

        <div className="input-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type={showPassword ? "text":"password"}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
          />
           <div className="passwordIconsection">
            <button type="button" onClick={showToggleEye} className="password-icon-button">
             <img className="passwordIcon" src={showPassword ? show:hide}/>
            </button>
          </div>
          {error.password && <span className="error-message">{error.password}</span>}
        </div>

        <div className="input-group">
          {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
          <div className="passwordIconsection">
            <button type="button" onClick={ShowConfirmToggleEye} className="password-icon-button">
              <img className="passwordIcon" src={showConfirmPassword ? show : hide}/>
            </button>
          </div>
          {error.confirmPassword && <span className="error-message">{error.confirmPassword}</span>}
        </div>

        <button onClick={handleClick} type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
}
