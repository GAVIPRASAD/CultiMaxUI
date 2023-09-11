import React, { useEffect, useState } from "react";
import Appbar from ".././Home/Appbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Metadata from "../../more/Metadata";
import {
  Button,
  Card,
  CardMedia,
  Container,
  Input,
  InputLabel,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

import diseasee from "../../utils/Images/ml/disease.jpg";
import Footer from "../Home/Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, detectDisease } from "../../actions/MLAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));





const DiseaseDetection = () => {
  const { error, loading, disease } = useSelector((state) => state.disease);

  const [file, setFile] = useState();
  const [val, setVal] = useState(false);
  const [base64img, setBase64img] = useState("");
  const dispatch = useDispatch();

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    if (e.target.files[0].size > 200000) {
      // console.log("File too large");
      toast.error("File too large");
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      // console.log(reader.result); //base64encoded string
      setBase64img(reader.result.split(",")[1]);
    };
    reader.onerror = (error) => {
      toast.error(error);
      // console.log("Error: ", error);
    };
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(base64img);
    dispatch(detectDisease({ image: base64img }));
    setVal(true);
    // console.log("Submit Handled");
  }

  useEffect(() => {
    if (error) {
      toast.error(
        "Unable to detect image upload another image and our model is limited to 4 plants and we will be updating soon"
      );
      dispatch(clearErrors());
    }
  }, [dispatch, disease, error]);
  // console.log(val?disease&&disease:<></>);
  return (
    <>
      <Appbar />
      <Metadata title={`Disease Detection by CULTIMAX`} />

      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#F9F9EF",
          borderRadius: "10px",
          paddingTop: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <Box sx={{ flexGrow: 1 }} style={{ maxWidth: "1320px" }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Item>
                <Typography
                  variant="h5"
                  component="h6"
                  style={{ fontFamily: "Ubuntu", color: "rgb(19, 61, 77)" }}
                >
                  Disease Detection By CULTIMAX
                  <Input
                    style={{ fontSize: "0rem", textDecoration: "none" }}
                    size="small"
                    readOnly
                    autoFocus
                  ></Input>
                </Typography>
              </Item>
            </Grid>
            <Grid xs={12} md={7}>
              <Item>
                <Typography
                  variant="p"
                  component="p"
                  align="justify"
                  p={2}
                  style={{ fontFamily: "Ubuntu", color: "rgb(19, 61, 77)" }}
                >
                  This reliable disease detection system developed by CULTIMAX.
                  This technology can detect around 10 diseases in 4 plants.
                  Detection of plant disease through some automatic technique is
                  beneficial as it reduces a large work of monitoring in big
                  farms of crops, and at very early stage itself it detects the
                  symptoms of diseases i.e. when they appear on plant leaves.
                </Typography>
                <div
                  className="caontsi"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <CardMedia
                    className="cardImage"
                    id="cardImage"
                    style={{ height: 250, width: 340, marginBottom: "10px" }}
                    image={diseasee}
                    title={"Disease Detection"}
                  />
                </div>
              </Item>
            </Grid>

            <Grid xs={12} md={5}>
              <Item>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ fontFamily: "Ubuntu", color: "rgb(19, 61, 77)" }}
                >
                  Upload a picture of your plant we will tell you the disease
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <input type="file" onChange={handleChange} required={true} />
                  <br />
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    type="submit"
                    style={{ marginTop: "10px" }}
                  >
                    Submit
                  </Button>
                </Box>

                <div
                  className="caontsi"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    padding: "10px",
                  }}
                >
                  <CardMedia
                    component={Box}
                    className="cardImage"
                    id="cardImage"
                    style={{ height: 234, width: 300 }}
                    image={file}
                    title={"Disease Detection"}
                  />
                </div>
              </Item>
            </Grid>
            <Grid xs={12} md={12} >
              <Item >
                {/* {val?disease&&disease.disease:<></>}
             {val?disease&&disease.plant:<></>}
             {val?disease&&disease.remedy:<></>} */}

                {val ? (
                  loading ? (
                    <LinearProgress color="success" />
                  ) : (
                    <div style={{padding:"20px"}}>
                      <Typography
                        variant="p"
                        component="p"
                        style={{
                          fontFamily: "Ubuntu",
                          color: "rgb(19, 61, 77)",
                          fontSize:"1.2rem"
                        }}
                      >
                        <h6
                          style={{
                            display: "inline",
                            fontFamily: "Ubuntu",
                            color: "green",
                            fontSize:"1.4rem"

                          }}
                        >
                          Disease:  
                        </h6>
                        {disease && disease.disease}
                      </Typography>
                      <br />
                      <Typography
                        variant="p"
                        component="p"
                        style={{
                          fontFamily: "Ubuntu",
                          color: "rgb(19, 61, 77)",
                          fontSize:"1.2rem"
                        }}
                      >
                        <h6
                          style={{
                            display: "inline",
                            fontFamily: "Ubuntu",
                            color: "rgb(19, 61, 77)",
                            color: "green",
                            fontSize:"1.4rem"
                          }}
                        >
                          Plant:
                        </h6>
                         {disease && disease.plant}
                      </Typography>
                      <br />
                      <Typography
                        variant="p"
                        component="p"
                        // align="justify"
                        style={{
                          fontFamily: "Ubuntu",
                          color: "rgb(19, 61, 77)",
                          fontSize:"1.2rem"
                        }}
                      >
                        <h6
                          style={{
                            display: "inline",
                            fontFamily: "Ubuntu",
                            color: "rgb(19, 61, 77)",
                            color: "green",
                            fontSize:"1.4rem"
                          }}
                        >
                          Remedy: 
                        </h6>
                        {disease && disease.remedy}
                      </Typography>
                      <br />
                      
                    </div>
                  )
                ) : (
                  ""
                )}
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Footer />
      </Container>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={2}
      />
    </>
  );
};

export default DiseaseDetection;
