import { Rating } from '@mui/material'
import React from 'react'

const ReviewCard = ({review}) => {
  let atime = review&&review.time;
  let date= atime.toString().split("T");
  // console.log(date[0]);
  let time = date[1].toString().split(".")[0];
  // console.log(time);
  return (
    <>
    <div style={{border:"1.5px solid rgb(0, 37, 69)", padding:"0.2rem", marginBottom:"0.3rem", borderRadius:"5px"}}>

    
    <div style={{
            display:"flex",
            alignItems:"center",
            padding:"0px 15px",
            paddingTop:"0.5rem",
            paddingBottom:"0"
            
        }}>
            <p style={{fontSize:"1.2vmax",fontWeight:"600",padding:"0px 0px",}}>{review&&review.name}</p>
            <br />          
            <p style={{paddingLeft:"8px",color:"rgb(240, 135, 6)", fontSize:"0.8rem"}}>
              {/* {(review&&review.time)} */}
              {`${date[0]} -- ${time}`}
              </p>
        </div>
          <div style={{padding:"0px 15px",paddingBottom:"5px", }}>
              <Rating value={review&& review.rating}  readOnly/>
              <p style={{lineHeight:"1.3",fontSize:"1.1vmax",color:"rgb(0, 37, 69)", fontFamily:"Catamaran", fontWeight:"inherit"}}>
                {review&&review.comment}
                </p>
          </div>
          </div>
    </>
  )
}

export default ReviewCard