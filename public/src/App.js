import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/features/authSlice";
import AddEditBikes from "./pages/AddEditBikes";
import Dashboard from "./pages/Dashboard";
import AuthHome from "./pages/AuthHome";
import SingleBike from "./pages/SingleBike";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import PredictNow from "./pages/PredictNow";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrolltoTop";

// import NoAuthHome from './pages/NoAuthHome';
// import HomePageSingleBike from './pages/HomePageSingleBike';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));


  useEffect(() => {
    dispatch(setUser(user));
  }, [ dispatch, user ]);
  return (
    <BrowserRouter>
      <>
      <ScrollToTop/>
        <Header />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<AuthHome />} />
          <Route path="/sell/search" element={<Search/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/addBikes"
            element={
              <PrivateRoute>
                <AddEditBikes />
              </PrivateRoute>
            }
          />
          <Route
            path="/editBikes/:id"
            element={
              <PrivateRoute>
                <AddEditBikes />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/sell/:id" element={<SingleBike />} />
          <Route path="/predictnow" element={<PredictNow />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      <Footer/>
      </>
     
    </BrowserRouter>
  );
}

export default App;
