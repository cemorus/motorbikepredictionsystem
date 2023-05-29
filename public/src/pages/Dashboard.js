import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBikesByUser } from "../redux/features/sellSlice";
import Spinner from "../components/Spinner";
import { deleteBike } from "../redux/features/sellSlice";
import {toast} from 'react-toastify';

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userBikes, loading } = useSelector((state) => ({ ...state.sell }));
  const userId = user?._id;
  const dispatch = useDispatch();
  console.log(userBikes);

  useEffect(() => {
    if (userId) {
      dispatch(getBikesByUser(userId));
    }
  }, [userId, dispatch]);

  const excerpt = (str) => {
    if (str?.length > 65) {
      str = str.substring(0, 65) + " ...";
    }
    return str;
  };

  if(loading){
    return <Spinner/>
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure want to delete this tour")) {
      dispatch(deleteBike({id, toast}));
    }
    }
  return (
    <div
      style={{
        margin: "auto",
        padding: "120px",
        maxWidth: "900px",
        alignContent: "center",
      }}
    >
      <h4 className="text-center">Dashboard: {user?.name}</h4>
      <hr style={{ maxWidth: "700px" }} />
      {userBikes &&
        userBikes.map((item) => (
          <MDBCardGroup >
            <MDBCard
              style={{ maxWidth: "600px" }}
              key={item._id} 
              className="mt-2"
            >
            <MDBRow className="g-0">
              <MDBCol md="4">
              <MDBCardImage className="rounded"
              src={`http://localhost:8000/uploads/` + item?.image}
              alt={item?.bike}
              fluid/>
              </MDBCol>
              <MDBCol md="8" className="d-flex ">
                <MDBCardBody>
                  <MDBCol md="8">
                  <MDBCardTitle className="text-start">
                  Bike Name: {excerpt(item?.bike)}
                  </MDBCardTitle>
                  <MDBCardText className="text-start">
                    Required Price: {item?.price}
                    <p><strong>Pradesh: &nbsp;</strong>{item?.pradesh}</p>
                  </MDBCardText>
                  </MDBCol>
                  <MDBCol md="">
                  <div
                    style={{
                      marginleft: "5px",
                      float: "right",
                      marginTop: "-60px",
                    }}
                  >
                    <MDBBtn className="mt-1" color="none">
                      <MDBIcon
                        fas
                        icon="trash"
                        style={{ color: "#dd4b39" }}
                        size="lg"
                        onClick={() => handleDelete(item._id)}
                      />
                    </MDBBtn>
                    <Link to={`/editBikes/${item._id}`}>
                      <MDBIcon
                        fas
                        icon="edit"
                        style={{ color: "#55acee", marginLeft: "10px" }}
                        size="lg"
                      />
                    </Link>
                  </div>
                  </MDBCol>
                  <hr/>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
            </MDBCard>
          </MDBCardGroup>
        ))}
    </div>
  );
};

export default Dashboard;
