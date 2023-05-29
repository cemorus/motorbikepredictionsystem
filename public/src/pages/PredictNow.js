import { MDBCard, MDBCardBody, MDBValidation } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { predictPrice } from "../redux/features/predictSlice";
import { Box, Button, Modal, TableBody, Typography } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";
import { AiFillCloseCircle } from "react-icons/ai";
import Spinner from "../components/Spinner";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./predictnow.css";

const initialState = {
  brandName: "",
  engine: "",
  mileage: "",
  makeYear: "",
  kmRun: "",
  pradesh: "",
  lotNumber: "",
};
const PredictNow = () => {
  const [predictData, setPredictData] = useState(initialState);
  const [open, setOpen] = React.useState(false);
  const { error, loading, prices, } = useSelector((state) => ({
    ...state.predict,
  }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { brandName, engine, mileage, makeYear, kmRun, pradesh, lotNumber } =
    predictData;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = (e) => {
    confirmAlert({
      message: "Are you sure want to predict the price.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setOpen(true);
          },
        },
        {
          label: "No",
          onClick: () => {
            setOpen(false);
          },
        },
      ],
    });
    e.preventDefault();
    if (
      brandName &&
      engine &&
      mileage &&
      makeYear &&
      kmRun &&
      pradesh &&
      lotNumber
    ) {
      const updatedPredictData = { ...predictData };
      dispatch(predictPrice({ updatedPredictData, navigate }));
    }
  };
  const handleClear = () => {
    setPredictData(initialState);
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setPredictData({ ...predictData, [name]: value });
  };
  // console.log("i am price", prices?.price?.result);

  return (
    <div className="predict-body">
      <div
        style={{
          margin: "0 auto",
          width: "50%",
          marginTop: "100px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
        className="container"
      >
        <div className="row">
          <div className="col-md-12">
            <div className="predict-head">
              <h2 style={{ color: "black" }}>Predict The Perfect Price</h2>
              <h6 style={{ color: "black" }}>Enter. Wait. Predict</h6>
              <hr />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="select-options">
                <div className=" mb-4">
                  <label className="form-label select-label">
                    Select Your Bike Brand
                  </label>
                  <select
                    className="select"
                    name="brandName"
                    onChange={onInputChange}
                    value={brandName}
                    required
                  >
                    <option value="">None</option>
                    <option value="Bajaj">Bajaj</option>
                    <option value="Yamaha">Yamaha</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Honda">Honda</option>
                    <option value="Royal Enfield">Royal Enfield</option>
                    <option value="TVS">TVS</option>
                    <option value="Cfmoto">Cfmoto</option>
                    <option value="Aprilia">Aprilia</option>
                    <option value="Hero">Hero</option>
                    <option value="KTM">KTM</option>
                    <option value="Vespa">Vespa</option>
                    <option value="Benelli">Benelli</option>
                    <option value="Crossfire">Crossfire</option>
                    <option value="Hartford">Hartford</option>
                    <option value="Motorhead">Vespa</option>
                    <option value="Cross X">Cross x</option>
                  </select>
                </div>
              </div>
              <div className="select-options">
                <div className=" mb-4">
                  <label className="form-label select-label">
                    Select Your engine displacement
                  </label>
                  <select
                    className="select"
                    name="engine"
                    onChange={onInputChange}
                    value={engine}
                    required
                  >
                    <option value="">None</option>
                    <option value="100">100 CC</option>
                    <option value="110">110 CC</option>
                    <option value="115">115 CC</option>
                    <option value="120">120 CC</option>
                    <option value="135">135 CC</option>
                    <option value="150">150 CC</option>
                    <option value="160">160 CC</option>
                    <option value="180">180 CC</option>
                    <option value="190">190 CC</option>
                    <option value="200">200 CC</option>
                    <option value="220">220 CC</option>
                    <option value="250">250 CC</option>
                    <option value="300">300 CC</option>
                    <option value="350">350 CC</option>
                    <option value="390">390 CC</option>
                    <option value="400">400 CC</option>
                    <option value="500">500 CC</option>
                    <option value="600">600 CC</option>
                  </select>
                </div>
              </div>
              <div className="textfield">
                <div className=" mb-4">
                  <input
                    placeholder="mileage"
                    type="text"
                    value={mileage}
                    name="mileage"
                    className="form-control"
                    onChange={onInputChange}
                    required
                    style={{ width: "100%", border: "1px solid #ccc" }}
                  />
                </div>
              </div>
              <div className="textfield">
                <div className=" mb-4">
                  <input
                    placeholder="makeYear (eg. 2015)"
                    type="text"
                    value={makeYear}
                    name="makeYear"
                    className="form-control"
                    onChange={onInputChange}
                    required
                    style={{ width: "100%", border: "1px solid #ccc" }}
                  />
                </div>
              </div>
              <div className="textfield">
                <div className=" mb-4">
                  <input
                    placeholder="kmRun"
                    type="text"
                    value={kmRun}
                    name="kmRun"
                    className="form-control"
                    onChange={onInputChange}
                    required
                    style={{ width: "100%", border: "1px solid #ccc" }}
                  />
                </div>
              </div>
              <div className="select-options">
                <div className=" mb-4">
                  <label className="form-label select-label">
                    Select Your Registered Pradesh (Provience)
                  </label>
                  <select
                    className="select"
                    name="pradesh"
                    onChange={onInputChange}
                    value={pradesh}
                    required
                  >
                    <option value="">None</option>
                    <option value="Bagmati">Bagmati</option>
                    <option value="Gandaki">Gandaki</option>
                    <option value="Seti">Seti</option>
                    <option value="Sagarmatha">Sagarmatha</option>
                    <option value="Mechi">Mechi</option>
                    <option value="Bheri">Bheri</option>
                    <option value="Janakpur">Janakpur</option>
                    <option value="Narayani">Narayani</option>
                    <option value="Lumbini">Lumbini</option>
                    <option value="Rapti">Rapti</option>
                    <option value="Mahakali">Mahakali</option>
                    <option value="Sudurpaschim">Sudurpaschim</option>
                    <option value="Dhaulagiri">Dhaulagiri</option>
                    <option value="1">Provience (1)</option>
                    <option value="2">Provience (2)</option>
                    <option value="3">Provience (3)</option>
                    <option value="4">Provience (4)</option>
                  </select>
                </div>
              </div>
              <div className="textfield">
                <div className=" mb-4">
                  <input
                    placeholder="lotNumber"
                    type="text"
                    value={lotNumber}
                    name="lotNumber"
                    className="form-control"
                    onChange={onInputChange}
                    required
                    style={{ width: "100%", border: "1px solid #ccc" }}
                  />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="buttons-predict">
                      <div className="col-md-6">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                          onClick={() => setOpen(false)}
                        >
                          Predict
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button
                          className="btn btn-secondary btn-block clear"
                          type="submit"
                          onClick={handleClear}
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Modal open={open} onClose={() => setOpen(false)}>
                <Box
                  position="absolute"
                  top="30%"
                  left="30%"
                  style={{ backgroundColor: "white" }}
                  className="model"
                >
                  <div className="model-btn">
                    <Button onClick={() => setOpen(false)}>
                      <AiFillCloseCircle size={40} />
                    </Button>
                    {loading && (
                      <div className="preloader">
                        <ClipLoader size={80} className="loader" />
                        <Typography className="loader-content">
                          Predicting the price...
                        </Typography>
                      </div>
                    )}
                    {!loading && (
                      <h1 className="predicted-price">
                        Your Predicted Price is: <br />
                        <br />
                        <br />
                        <br />
                        <span>{prices?.price?.result}</span>
                      </h1>
                    )}
                  </div>
                </Box>
              </Modal>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictNow;
