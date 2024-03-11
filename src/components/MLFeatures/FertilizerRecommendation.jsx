import React, { useEffect, useState } from "react";
import Appbar from ".././Home/Appbar";
import fertilizerr from "../../utils/Images/ml/fertilizer.jpg";
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
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Home/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  cropPrediction,
  fertilizerRecommendation,
} from "../../actions/MLAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const FertilizerRecommendation = () => {
  const { error, loading, fertilizer } = useSelector(
    (state) => state.fertilizer
  );

  const [nitrogen, setNitrogen] = useState("");
  const [phosphorous, setPhosphorous] = useState("");
  const [potassium, setPotassium] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [moisture, setMoisture] = useState("");
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");

  const [val, setVal] = useState(false);

  const dispatch = useDispatch();
  var fertilizerval = {};
  const values = [
    "Temperature",
    "Humidity",
    "Moisture",
    "Nitrogen ",
    "Potassium",
    "Soil-Type",
    "Crop-Type",
  ];
  const Maxdata = [38, 72, 65, 140, 145, 205, "", ""];

  const validvalues = (data) => {
    for (var i = 0; i < Maxdata.length - 2; i++) {
      if (data[i] <= Number(0)) {
        toast.error(values[i] + " Should not be less than or equal to 0");
        return false;
      }
      else if (data[i] > Maxdata[i]) {
        toast.error(values[i] + " Should not be greater than " + Maxdata[i]);
        return false;
      }
    }
    return true;
  };

  // // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [
      Number(temperature),
      Number(humidity),
      Number(moisture),
      Number(nitrogen),
      Number(potassium),
      Number(phosphorous),
      soilType,
      cropType,
    ];

    if (validvalues(data)) {
      fertilizerval = {
        array: data,
      };
      dispatch(fertilizerRecommendation(fertilizerval));
      setVal(true);
      // console.log(fertilizerval);
      // toast.success("Sucessfully Submitted")
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Values Might be incorrect try again later");
      dispatch(clearErrors());
    }
  }, [dispatch, fertilizer, error]);

  // console.log(val?fertilizer&&fertilizer:"");

  return (
    <>
      <Appbar />
      <Metadata title={`Fertilizer Recommendation by CULTIMAX`} />

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
                  Fertilizer Recommendation By CULTIMAX
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
                  The fertilizers are used to meet the nutritional needs of the
                  crop as well as to increase the nutrient content of the soil
                  Type of soil plays a major role in the crop yield. Suggesting
                  the use of fertilizers may help the farmers to make the best
                  decision for their cropping situation. If fertilizer is used
                  more or less in the field the soil may lose it fertility and
                  crop may not give the expected yield. So, fertilizer also
                  becomes the major factor in it.
                  <br />
                  For Testing Purpose : [25,50,26,15,14,11,"Red","Ground Nuts"]
                  <br />
                  Soil Type examples: Sandy, Loamy, Black, Red, Clayey.
                  <br />
                  Crop Type examples: Maize, SugarCane, Cotton, Wheat, Millets,
                  Oil Seeds, Paddy, Ground Nut, Tobacco, Barley etc.
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
                    image={fertilizerr}
                    title={"Fertilizer Recommendation"}
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
                    <InputLabel
                      htmlFor="Temperature"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Temperature(C)
                    </InputLabel>
                    <OutlinedInput
                      id="Temperature"
                      label="Temperature"
                      size="small"
                      type="number"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                    />
                  </FormControl>
                  <br />

                  <FormControl>
                    <InputLabel
                      htmlFor="Humidity"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Humidity
                    </InputLabel>
                    <OutlinedInput
                      id="Humidity"
                      label="Humidity"
                      size="small"
                      type="number"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={humidity}
                      onChange={(e) => setHumidity(e.target.value)}
                    />
                  </FormControl>
                  <br />

                  <FormControl>
                    <InputLabel
                      htmlFor="Moisture"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Moisture
                    </InputLabel>
                    <OutlinedInput
                      id="Moisture"
                      label="Moisture"
                      size="small"
                      type="number"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={moisture}
                      onChange={(e) => setMoisture(e.target.value)}
                    />
                  </FormControl>
                  <br />

                  <FormControl>
                    <InputLabel
                      htmlFor="Nitrogen"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Nitrogen
                    </InputLabel>
                    <OutlinedInput
                      id="Nitrogen"
                      label="Nitrogen"
                      size="small"
                      type="number"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={nitrogen}
                      onChange={(e) => setNitrogen(e.target.value)}
                    />
                  </FormControl>
                  <br />

                  <FormControl>
                    <InputLabel
                      htmlFor="Potassium"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Potassium
                    </InputLabel>
                    <OutlinedInput
                      id="Potassium"
                      label="Potassium"
                      size="small"
                      type="number"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={potassium}
                      onChange={(e) => setPotassium(e.target.value)}
                    />
                  </FormControl>
                  <br />

                  <FormControl>
                    <InputLabel
                      htmlFor="Phosphorous"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Phosphorous
                    </InputLabel>
                    <OutlinedInput
                      id="Phosphorous"
                      label="Phosphorous"
                      size="small"
                      type="number"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={phosphorous}
                      onChange={(e) => setPhosphorous(e.target.value)}
                    />
                  </FormControl>
                  <br />

                  {/* <FormControl>
                    <InputLabel
                      htmlFor="Soil Type"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Soil Type
                    </InputLabel>
                    <OutlinedInput
                      id="Soil Type"
                      label="Soil Type"
                      size="small"
                      type="text"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={soilType}
                      onChange={(e) => setSoilType(e.target.value)}
                    />
                  </FormControl> */}

                      {/* <MenuItem value={"Sandy"}>Sandy</MenuItem>
                      <MenuItem value={"Loamy"}>Loamy</MenuItem>
                      <MenuItem value={"Black"}>Black</MenuItem>
                      <MenuItem value={"Red"}>Red</MenuItem>
                      <MenuItem value={"Clayey"}>Clayey</MenuItem> */}
                   <Box
                    sx={{
                      "& .MuiTextField-root": { width: "14rem" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="SoilType"
                      select
                      label="SoilType"
                      size="small"
                      defaultValue=""
                      value={soilType}
                      onChange={(e) => setSoilType(e.target.value)}
                    >
                      <MenuItem value={"Sandy"}>Sandy</MenuItem>
                      <MenuItem value={"Loamy"}>Loamy</MenuItem>
                      <MenuItem value={"Black"}>Black</MenuItem>
                      <MenuItem value={"Red"}>Red</MenuItem>
                      <MenuItem value={"Clayey"}>Clayey</MenuItem>
                    </TextField>
                  </Box>
                  <br />

                  {/* <FormControl>
                    <InputLabel
                      htmlFor="Crop Type"
                      style={{ fontSize: "1.1rem", fontWeight: "500" }}
                    >
                      Crop Type
                    </InputLabel>
                    <OutlinedInput
                      id="Crop Type"
                      label="Crop Type"
                      size="small"
                      type="text"
                      required
                      fullWidth
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                      value={cropType}
                      onChange={(e) => setCropType(e.target.value)}
                    />
                  </FormControl>
                  <br /> */}

                  <Box
                    sx={{
                      "& .MuiTextField-root": { width: "14rem" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="CropType"
                      select
                      label="CropType"
                      size="small"
                      defaultValue=""
                      value={cropType}
                      onChange={(e) => setCropType(e.target.value)}
                    >
                      <MenuItem value={"Maize"}>Maize</MenuItem>
                      <MenuItem value={"SugarCane"}>SugarCane</MenuItem>
                      <MenuItem value={"Cotton"}>Cotton</MenuItem>
                      <MenuItem value={"Wheat"}>Wheat</MenuItem>
                      <MenuItem value={"Millets"}>Millets</MenuItem>
                      <MenuItem value={"Oil Seeds"}>Oil Seeds</MenuItem>
                      <MenuItem value={"Paddy"}>Paddy</MenuItem>
                      <MenuItem value={"Ground Nuts"}>Ground Nut</MenuItem>
                      <MenuItem value={"Tobacco"}>Tobacco</MenuItem>
                      <MenuItem value={"Barley"}>Barley</MenuItem>
                    </TextField>
                  </Box>
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

            {val && val ? (
              <>
                {
                  <Grid xs={12} md={12}>
                    <Item>
                      Recommended fertilizer is:
                      <Typography
                        variant="h4"
                        component="h5"
                        style={{
                          fontFamily: "inherit",
                          color: "rgb(19, 61, 77)",
                        }}
                      >
                        {val?(loading?<LinearProgress color="success" />:`${fertilizer&&fertilizer}`):""}
                      </Typography>
                    </Item>
                  </Grid>
                }
              </>
            ) : (
              ""
            )}
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

export default FertilizerRecommendation;
