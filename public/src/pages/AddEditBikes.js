import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBValidation,
  MDBBtn,
  MDBInput,
  MDBValidationItem,
} from "mdb-react-ui-kit";
// import ChipInput from "material-ui-chip-input";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { sellBike } from "../redux/features/sellSlice";
import { updateBike } from "../redux/features/sellSlice";
import { color } from "@mui/system";

const initialState = {
  bike: "",
  price: "",
  brandName:"",
  kmRun:"",
  mileage:"",
  engine:"",
  pradesh:"",
  lotNumber:"",
  makeYear:"",
 
};

const AddEditBikes = () => {
  const [bikeData, setBikeData] = useState(initialState);
  const { error, loading, userBikes } = useSelector((state) => ({
    ...state.sell,
  }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bike, price, brandName,kmRun,mileage,engine,pradesh,lotNumber,makeYear} = bikeData;
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleBike = userBikes.find((bike) => bike._id === id);
      
      setBikeData({ ...singleBike });
    }
  }, [id]);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bike && price && brandName && kmRun && mileage && engine && pradesh && lotNumber && makeYear ) {
      const updatedBikeData = { ...bikeData, name: user?.name };
      if (!id) {
        dispatch(sellBike({ updatedBikeData, navigate, toast }));
      } else {
        dispatch(updateBike({ id, updatedBikeData, navigate, toast }));
      }

      
      handleClear();
    }
  };
  const onFileUpload = (e) => { 
    setBikeData({ ...bikeData, image: e.target.files[0] });
  }
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBikeData({ ...bikeData, [name]: value });
  };

  const handleClear = () => {
    setBikeData(initialState);
  };
  return (
    <div className="addbike">
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "500px",
          alignContent: "center",
          marginTop: "100px",

        }}
        className="container"
      >
        <MDBCard alignment="center">
          <h5 className="add-update">{id ? "Update Bike" : "Create Ads"}</h5>
          <hr/>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <label htmlFor="validationCustom01" className="form-label">Bike Name:</label>
                <input
                  placeholder="Bike Name and details"
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={bike}
                  name="bike"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Your Bike Name
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Bike Brand:</label>
                <input
                  placeholder="Bike brand Name"
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={brandName}
                  name="brandName"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter your bike brand
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Kilometer Travelled :</label>
                <input
                  placeholder="Km Travelled"
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={kmRun}
                  name="kmRun"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Kilometer according to meter console
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Expected Mileage :</label>
                <input
                  placeholder="Mileage of your vechile "
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={mileage}
                  name="mileage"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Expected Mileage of your vechile
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Engine displacement (CC):</label>
                <input
                  placeholder="engine displacement "
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={engine}
                  name="engine"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter CC of your bike
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Registered Pradesh:</label>
                <input
                  placeholder="Registered Pradesh "
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={pradesh}
                  name="pradesh"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Registered Pradesh of your bike
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Lot Number:</label>
                <input
                  placeholder="Lot Number of your vechile "
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={lotNumber}
                  name="lotNumber"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Lot Number of your vechile
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Manufactured Year:</label>
                <input
                  placeholder="Manufactured year "
                  type="text"
                  style={{ height: "50px" }}
                  className="form-control"
                  value={makeYear}
                  name="makeYear"
                  onChange={onInputChange}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Manufactured year of your vechile
                </div>
              </div>
              <div className="col-md-12">
              <label htmlFor="validationCustom01" className="form-label">Your Expected Price:</label>
                <input
                  placeholder="Enter Price"
                  type="number"
                  className="form-controls"
                  value={price}
                  name="price"
                  onChange={onInputChange}
                  required
                  style={{ marginBottom: "20px", width: "100%" }}
                />
                <div className="invalid-feedback">
                  Please Enter your expected price
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className="image-upload">
                <input 
                  type="file"
                  name="image"
                  onChange={onFileUpload}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <MDBBtn style={{ width: "100%", backgroundColor:"#4993FA", fontSize:"15px" }}>
                  {id ? "update" : "Submit"}
                </MDBBtn>
                <MDBBtn
                  style={{ width: "100%",fontSize:"15px",backgroundColor:"#EB5F52" }}
                  className="mt-2"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default AddEditBikes;
