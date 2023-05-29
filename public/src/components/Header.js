import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";
import "./Header.css";
import { searchBikes } from "../redux/features/sellSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search) {
      dispatch(searchBikes(search));
      navigate(`/sell/search?searchQuery=${search}`);
      setSearch("");
    } else {
      navigate("/");
    }
  }
  const handleLogout = () => {
    dispatch(setLogout())
  }
  const { user } = useSelector((state) => ({ ...state.auth }));
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#ffff" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#ffff", fontWeight: "bold", fontSize: "25px" }}
        >
         <h2 style={{fontWeight: "bold", color: "#4993FA"}}>PPS</h2> 
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#ffff" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
         
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            <MDBNavbarItem>
            <form className="d-flex input-group w-auto" onSubmit={handleSubmit}>
              
            <input
            type="text"
            className="search form-control"
            placeholder="Search Bikes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            // style={{ color: "#0000", marginTop: "14px" }}
            />
            <div style={{marginTop: "20px", marginLeft: "5px"}}>
            <MDBIcon icon="search" fas />
            </div>
            </form>
            </MDBNavbarItem>
            <MDBNavbarItem>
                  <MDBNavbarLink href="/addBikes">
                    <p className="header-text">Create Ad</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>

            {user?._id && (
              <>
                
                <MDBNavbarItem>
                  <MDBNavbarLink href="/dashboard">
                    <p className="header-text">Dashboard</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>

              </>
            )}
           
            
            {user?._id ? (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login">
                  <p className="header-text" onClick={handleLogout}>Logout</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBNavbarLink href="/login" >
                  <p className="header-text">Login</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
            )}
            <MDBNavbarItem>
                  <MDBNavbarLink href="/predictnow" className="btn-predict">
                    <p className="header-text"> Predict Now</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
             {user?._id && (
                <MDBDropdown>
                <MDBDropdownToggle className="user-id"><MDBIcon fas icon="user-circle" className="fa-2x" color="black" /></MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Name : {user?.name}</MDBDropdownItem>
                  <MDBDropdownItem link>Email: {user?.email}</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
