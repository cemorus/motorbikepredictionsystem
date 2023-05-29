import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-toastify';
import { register } from "../redux/features/authSlice";
import './register.css';
import registerimg from "../pictures/register.png";


const initialState = {
    name:"",
    email: "",
    password: "",
    
}
const Register = () => {
    const [formValue, setFormValue] = useState(initialState);
    const {loading, error} = useSelector((state) =>({...state.auth}));
    const {name,email, password} = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        error && toast.error(error);
    },[error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && email && password) {
            dispatch(register({formValue, navigate, toast}));
        }
    }
    const onInputChange = (e) =>{
            let {name, value} = e.target;
            setFormValue({...formValue, [name]: value});
    }
  return (
    <div className="register">
        <h3>Register</h3>
        <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="login-card">
        <MDBCard alignment="left">
            <MDBCardBody>
                <MDBValidation onSubmit = {handleSubmit} noValidate className="row g-3">
                <div className="col-md-12">
                    <p>Name:</p>
                    <div className="register-field">
                    <MDBValidationItem feedback='Please enter Your Name.' invalid className='col-md-12'>
                        <MDBInput 
                        label="name"
                        type="name"
                        value={name}
                        name="name"
                        onChange={onInputChange}
                        required
                        validation = "Please provide a valid Username."
                        />
                        </MDBValidationItem>
                    </div>
                    </div>
                    <div className="col-md-12">
                    <p>Email:</p>
                    <div className="register-field">
                    <MDBValidationItem feedback='Please enter a valid email.' invalid className='col-md-12'>
                        <MDBInput 
                        label="Email"
                        type="email"
                        value={email}
                        name="email"
                        onChange={onInputChange}
                        required
                        validation = "Please provide a valid email."
                        />
                        </MDBValidationItem>
                    </div>
                    </div>
                    <div className="col-md-12">
                    <p>Password:</p>
                    <div className="register-field">
                    <MDBValidationItem feedback='Please enter a correct password.' invalid className='col-md-12'>
                    <MDBInput 
                        label="password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={onInputChange}
                        required                        />
                        </MDBValidationItem>
                    </div>
                    </div>
                    {/* <div className="col-md-12">
                    <MDBValidationItem feedback='Please re enter your password.' invalid className='col-md-12'>
                    <MDBInput 
                        label="Password Confirm"
                        type="password"
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={onInputChange}
                        required                        />
                        </MDBValidationItem>
                    </div> */}
                    <div className="col-md-12">
                        <MDBBtn type="submit" color="primary" className="button-register w-30"> 
                        {loading && (
                            <MDBSpinner
                            size="sm"
                            role="status"
                            tag="span"
                            className="me-2"
                            />
                        )}
                        Register
                            </MDBBtn>
                    </div>
                </MDBValidation>
                </MDBCardBody>
                <div className="signin-link">
                <MDBCardFooter>
                    <Link to="/login">
                    <p>Already have an account?<span>Sign In</span> </p>
                    </Link>
                    </MDBCardFooter>
                    </div>
        </MDBCard>
    </div>
    </div>
    <div className="col-md-6">
        <div className="register-image">
        <img src={registerimg} alt="register" className="register-img"/>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
};

export default Register;
