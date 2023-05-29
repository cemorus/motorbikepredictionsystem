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
import { toast } from "react-toastify";
import { login } from "../redux/features/authSlice";
import "./login.css";
import loginbike from "../pictures/loginbike.png" 

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div className="login">
        <h3>Login</h3>
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="login-card">
            <MDBCard alignment="left" className="card-login">
              <MDBCardBody>
                <MDBValidation
                  onSubmit={handleSubmit}
                  noValidate
                  className="row g-3"
                >
                  <div className="col-md-12">
                  <p>Email:</p>
                    <div className="text-field">
                    <MDBValidationItem
                      feedback="Please enter a valid email."
                      invalid
                      className="col-md-12"
                    >
                      <MDBInput
                        label="Email"
                        type="email"
                        value={email}
                        name="email"
                        onChange={onInputChange}
                        required
                        validation="Please provide a valid email."
                      />
                    </MDBValidationItem>
                    </div>
                  </div>
                  <div className="col-md-12">
                  <p>Password:</p>
                  <div className="text-field">
                    <MDBValidationItem
                      feedback="Please enter a correct password."
                      invalid
                      className="col-md-12"
                    >
                      <MDBInput
                        label="password"
                        type="password"
                        value={password}
                        name="password"
                        onChange={onInputChange}
                        required
                      />
                    </MDBValidationItem>
                    </div>
                  </div>
                  <div className="col-md-12">
                  
                    <MDBBtn type="submit" className=" button-login w-30">
                      {loading && (
                        <MDBSpinner
                          size="sm"
                          role="status"
                          tag="span"
                          className="me-2 mt-2"
                        />
                      )}
                      Login
                    </MDBBtn>
                    </div>
                </MDBValidation>
              </MDBCardBody>
             <div className="signup-link">
              <MDBCardFooter>
                <Link to="/register">
                  <p>Dont have an account? <span>Sign Up</span></p>
                </Link>
              </MDBCardFooter>
              </div>
            </MDBCard>
          </div>
        </div>
        <div className="col-md-6">
            <div className="right-login">
            <img src={loginbike} alt="loginbike" />
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
