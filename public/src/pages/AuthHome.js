import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";

import { getBikes } from "../redux/features/sellSlice";
import CardBike from "../components/CardBike";
import Spinner from "../components/Spinner";
import "./Home.css";
import { AiOutlineHeart } from "react-icons/ai";
import {
  SiHonda,
  SiYamahamotorcorporation,
  SiKtm,
  SiRollsroyce,
} from "react-icons/si";
import { GoSettings } from "react-icons/go";
import cb from "../pictures/cb.jpeg";
import mt from "../pictures/mt-15.jpeg";
import rr from "../pictures/rr310.png";
import benelli from "../pictures/benelli.webp";
import homeimage from "../pictures/homeimage.png";
import bikeimage from "../pictures/bike.png";
import { ImgOverlay } from "image-overlay-react";
import "image-overlay-react/dist/index.css";
import MayLike from "../components/MayLike";
import { Link } from "react-router-dom";
const Home = () => {
  const { bikes, loading } = useSelector((state) => ({ ...state.sell }));
  // const {user} = useSelector((state) => ({...state.auth}));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBikes());
  }, []);
  if (loading) {
    return <Spinner />;
  }

  const { bike, price, image } = bikes;

  console.log(bikes);

  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-md-8 home-left-section">
            <h4>
              Predict The <br />
              <span>Perfect Price</span>
            </h4>
            <p>
              Motorcycle Price Prediction System' is a web application that will
              let users sell or buy old motorcycles. Additionally, they can
              browse the diverse motorcycles available in the automobile market
              in Nepal. The system will suggest the user the best one as per
              their needs filtering the user inputted specifications.
            </p>
            <Link to="/predictnow">
              <button>Predict Now</button>
            </Link>
          </div>
          <div className="col-md-4 home-img">
            <img src={bikeimage} alt="bike" />
          </div>
        </div>
      </div>
      <div className="play-content">
        <div className="container play">
          <div className="row">
            <div className="col-md-12">
              <h4>Top selling Brand</h4>
            </div>
            <div className="col-md-3">
              <div className="play-store">
                <div className="play-main-section">
                  <div className="icon">
                    <SiHonda size={90} color="#CC0000" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="play-store">
                <div className="play-main-section">
                  <div className="icon">
                    <SiYamahamotorcorporation size={90} color="#3839F5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="play-store">
                <div className="play-main-section">
                  <div className="icon">
                    <SiKtm size={90} color="#F2771A" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="play-store">
                <div className="play-main-section">
                  <div className="icon">
                    <SiRollsroyce size={90} color="#01040B" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bikes-section">
        <div className="row">
          <div className="col-md-4 trending">
            <p>
              <AiOutlineHeart size={35} /> &nbsp;&nbsp; Trending Products
            </p>
          </div>
          <div className="col-md-4">
            {/* <p>
              <AiOutlineHeart size={35} /> &nbsp;&nbsp; Trending Products
            </p> */}
          </div>
          <div className="col-md-4">
            <div className="sort">
              <p>
                <GoSettings />
                &nbsp;&nbsp;Sort By
              </p>
              <select className="bikes_drop" id="cars">
                <option value="volvo">Yamaha</option>
                <option value="saab">Bajaj</option>
                <option value="opel">Tvs</option>
                <option value="audi">Honda</option>
              </select>
            </div>
          </div>
          <hr className="bikes-hr" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{
                margin: "auto",
                padding: "15px",
                maxWidth: "1000px",
                alignContent: "center",
              }}
            >
              <MDBRow className="mt-5">
                {bikes.length === 0 && (
                  <MDBTypography className="text-center mb-0" tag="h2">
                    No Bikes Found
                  </MDBTypography>
                )}

                <MDBCol>
                  <MDBContainer>
                    <MDBRow style={{ marginTop: "10px" }}>
                      {/* <h1> hello : {user?.name} your created ads bikes are</h1> */}
                    </MDBRow>
                    <MDBRow className="row-cols-1 row-cols-md-3 g-2">
                      {bikes &&
                        bikes.map((item, index) => (
                          <CardBike key={index} {...item} />
                        ))}
                    </MDBRow>
                  </MDBContainer>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </div>
      </div>
      <div className="container third-image-section">
        <div className="row">
          <div className="col-md-12 third-para">
            <p>
              {" "}
              <AiOutlineHeart size={35} />
              &nbsp;&nbsp;Find MotorCycles based on Brands
            </p>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={rr}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>
                  <a
                    href="https://tvsnepal.com/"
                    target="blank"
                    style={{ color: "#ffff" }}
                  >
                    Tvs{" "}
                  </a>
                </h2>
              </ImgOverlay>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={cb}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>
                  <a
                    href="https://honda.com.np/"
                    target="blank"
                    style={{ color: "#ffff" }}
                  >
                    Honda{" "}
                  </a>
                </h2>
              </ImgOverlay>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={mt}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>
                  <a
                    href="https://www.yamaha.com.np/"
                    target="blank"
                    style={{ color: "#ffff" }}
                  >
                    Yamaha{" "}
                  </a>
                </h2>
              </ImgOverlay>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="third-section">
              <ImgOverlay
                imgSrc={benelli}
                alt=""
                bgColor="pink"
                position="right"
                width="400px"
                height="200px"
                fSize="48px"
                className="overlay"
              >
                <h2>
                  <a
                    href="https://www.benelli.com/np-en"
                    target="blank"
                    style={{ color: "#ffff" }}
                  >
                    Benelli
                  </a>
                </h2>
              </ImgOverlay>
            </div>
          </div>
        </div>
      </div>
      <div className="women-image">
        <Link to="/predictnow">
          <img src={homeimage} alt="homeimage" className="homeimage" />
        </Link>
      </div>
      <MayLike />
    </div>
  );
};

export default Home;
