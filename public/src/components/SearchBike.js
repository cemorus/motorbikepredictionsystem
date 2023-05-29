import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardGroup,
    MDBCardImage,
  } from "mdb-react-ui-kit";
  import { Link } from "react-router-dom";
  import {ImLocation2} from "react-icons/im";

const SearchBike = ({bikes,bike, price, _id,image}) => {
  // const [image, setImage] = React.useState('');
    const excerpt = (str) => {
        if (str?.length > 65) {
          str = str.substring(0, 65) + " ...";
        }
        return str;
      };

  return (
    <>
    <div className='bikes-card'>
    <MDBCardGroup className='bikes-sectionss'>
            <MDBCard className="h-100 mt-20 d-sm-flex" style={{ maxWidth: "20rem" }}>
              <MDBCardImage
               src={`http://localhost:8000/uploads/` + image}
              alt="bike image"
              position='top'
              style={{maxWidth: "100%", height: "180px"}}
              />

        
        <span className="text-start tag-card">
          { bikes?.map((item) => `${item} `)}
        </span>
        <MDBCardBody>
          {/* <MDBCardTitle className="text-start">{email}</MDBCardTitle> */}
          <MDBCardText className="text-start">Description: {excerpt(bike)}</MDBCardText>
          <MDBCardTitle className="text-start">Price:Nrs {price}</MDBCardTitle>
          <div className="card-between">
          <p>$ Negotiable</p>
          <p className='location'><ImLocation2/> Pokhara</p>
          </div>
          
          <MDBCardText className="link text-center">
           
            <Link to={`/sell/${_id}`}>Read More</Link>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    </div>
    </>
  )
}

export default SearchBike;
