import React, { useEffect, useState } from "react";
import Appbar from ".././Home/Appbar";
import cropp from "../../utils/Images/ml/crop.jpg";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Metadata from "../../more/Metadata";
import {
  Button,
  Card,
  CardMedia,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  LinearProgress,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Home/Footer";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, cropPrediction } from "../../actions/MLAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const CropPrediction = () => {


  const { error, loading, crop } = useSelector(
    (state) => state.crop
  );

  const [nitrogen,setNitrogen] = useState("");
  const [phosphorous,setPhosphorous] = useState("");
  const [potassium,setPotassium] = useState("");
  const [temperature,setTemperature] = useState("");
  const [humidity,setHumidity] = useState("");
  const [ph,setPh] = useState("");
  const [rainfall,setRainfall] = useState("");
  const [val,setVal] = useState(false);

  const dispatch = useDispatch();
  var cropval = {}
  const values=["Nitrogen","Phosphorous","Potassium","Temperature","Humidity","Ph","Rainfall"];
  const Maxdata =[140,145,205,45,100,14,300];

  const validvalues=(data)=>{
    for(var i=0;i<Maxdata.length;i++){
      if (data[i]<= Number(0)) { 
        toast.error(values[i] +" Should not be less than 0");
          return false;
        }
        else if (data[i]>Maxdata[i]) {
          toast.error(values[i] +" Should not be greater than "+Maxdata[i])
          return false;
        }
      }
      return true;
  }
 

  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [Number(nitrogen),Number(phosphorous),Number(potassium),Number(temperature),Number(humidity),Number(ph),Number(rainfall)]

    if(validvalues(data)){
      cropval = {
        array:data
      }
      dispatch(cropPrediction(cropval))
      setVal(true)
      // console.log(cropval);
      // toast.success("Sucessfully Submitted")
    }

  };

  useEffect(()=>{
    if (error) {
      toast.error("Values Might be incorrect try again later");
      dispatch(clearErrors());
    }
  },[dispatch,crop,error]);

  // console.log(val?crop&&crop:"");

  return (
    <>
      <Appbar />
      <Metadata title={`Crop Prediction by CULTIMAX`} />

      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#F9F9EF",
          borderRadius: "10px",
          paddingTop: "0.5rem",
          marginTop: "0.5rem",
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
                  Crop Prediction By CULTIMAX
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
                  Crop prediction is one of the challenging problems in
                  precision agriculture, crop yield depends on many different
                  factors such as climate, weather, soil, use of fertilizer. An
                  accurate crop yield prediction model can help farmers to
                  decide on what to grow and when to grow.The model will take the desired inputs from the farmers such as Rainfall, Nitrogen Content, Phosphorus Content, etc. to identify the pattern among the data and then predict the crop according to those inputs. <br />
                  For Testing Purpose: [59,66,47.77,32.555,90.1,6,233] 
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
                    style={{ height: 250, width: 380, marginBottom: "2.5rem" }}
                    image={cropp}
                    title={"Crop Prediction"}
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
                  Enter the values 
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <FormControl>
                    <InputLabel htmlFor="Nitrogen" style={{fontSize:"1.1rem", fontWeight:"500"}}>Nitrogen</InputLabel>
                    <OutlinedInput id="Nitrogen" label="Nitrogen" size="small" type="number" required fullWidth style={{paddingBottom:"5px", marginBottom:"0.6rem"}}
                    value={nitrogen} onChange={(e)=> setNitrogen(e.target.value)}/>
                  </FormControl>
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="Phosphorous" style={{fontSize:"1.1rem", fontWeight:"500"}}>Phosphorous</InputLabel>
                    <OutlinedInput id="Phosphorous" label="Phosphorous" size="small" type="number"  required fullWidth style={{paddingBottom:"5px", marginBottom:"0.6rem"}}
                    value={phosphorous} onChange={(e)=> setPhosphorous(e.target.value)}/>
                  </FormControl>
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="Potassium" style={{fontSize:"1.1rem", fontWeight:"500"}}>Potassium</InputLabel>
                    <OutlinedInput id="Potassium" label="Potassium" size="small" type="number" required fullWidth style={{paddingBottom:"5px", marginBottom:"0.6rem"}}
                    value={potassium} onChange={(e)=> setPotassium(e.target.value)}/>
                  </FormControl>
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="Temperature" style={{fontSize:"1.1rem", fontWeight:"500"}}>Temperature(C)</InputLabel>
                    <OutlinedInput id="Temperature" label="Temperature" size="small" type="number" required fullWidth style={{paddingBottom:"5px", marginBottom:"0.6rem"}}
                    value={temperature} onChange={(e)=> setTemperature(e.target.value)}/>
                  </FormControl>
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="Humidity" style={{fontSize:"1.1rem", fontWeight:"500"}}>Humidity</InputLabel>
                    <OutlinedInput id="Humidity" label="Humidity" size="small" type="number" required fullWidth style={{paddingBottom:"5px", marginBottom:"0.6rem"}}
                    value={humidity} onChange={(e)=> setHumidity(e.target.value)}/>
                  </FormControl>
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="Ph value" style={{fontSize:"1.1rem", fontWeight:"500"}}>Ph value</InputLabel>
                    <OutlinedInput id="Ph value" label="Ph value" size="small" type="number" required fullWidth style={{paddingBottom:"5px", marginBottom:"0.6rem"}}
                    value={ph} onChange={(e)=> setPh(e.target.value)}/>
                  </FormControl>
                  <br />
                  <FormControl>
                    <InputLabel htmlFor="Rainfall" style={{fontSize:"1.1rem", fontWeight:"500"}}>Rainfall</InputLabel>
                    <OutlinedInput id="Rainfall" label="Rainfall" size="small" type="number" required fullWidth style={{paddingBottom:"5px", marginBottom:"0.6rem"}}
                    value={rainfall} onChange={(e)=> setRainfall(e.target.value)}/>
                  </FormControl>
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
              </Item>
            </Grid>

            {val&&val?<>
            {<Grid xs={12} md={12}>
              <Item>
              Recommended crop is: 
              <Typography
                  variant="h4"
                  component="h5"
                  style={{ fontFamily: "inherit", color: "rgb(19, 61, 77)" }}
                >                
                   {/* {val?(loading?"Loading Results.....":`${crop&&crop}`):""} */}
                   {val?(loading?<LinearProgress color="success" />:`${crop&&crop}`):""}
                   
                </Typography>
              </Item>
              
            </Grid>}</>:""}
          </Grid>
        </Box>

        <Footer />
      </Container>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        //limit={2}
      />
    </>
  );
};

export default CropPrediction;
