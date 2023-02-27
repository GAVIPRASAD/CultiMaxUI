import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import Appbar from "../Home/Appbar";
import Metadata from "../../more/Metadata";
import Footer from "../Home/Footer";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import ForwardIcon from "@mui/icons-material/Forward";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        CultiMax
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Shipping address", "Review your order"];
// const steps = ['Shipping address',  'Review your order','Payment details',];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Review />;
    // case 2:
    //   return <PaymentForm />;
    default:
      // throw new Error("Unknown step");
      return
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const navigate = useNavigate();
  const paymentdirect =()=>{
    navigate("/payment")
  }

  return (
    <div style={{ backgroundColor: "rgba(76, 139, 27, 0.956)" }}>
      <ThemeProvider theme={theme}>
        <Metadata title="Checkout" />
        <CssBaseline />
        <Appbar>
          {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar> */}
        </Appbar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              // <React.Fragment>
              //   <Typography variant="h5" gutterBottom>
              //     Thank you for your order.
              //   </Typography>
              //   <Typography variant="subtitle1" style={{marginBottom:"15rem"}}>
              //     {/* Your order number is #2001539. */}
              //      We have emailed your order
              //     confirmation, and will send you an update when your order has
              //     shipped.

              //   </Typography>

              //   <Button
              //       variant="contained"
              //       onClick={()=> navigate("/")}
              //       color="warning"
              //       sx={{ mt: 3, ml: 1 }}
              //     >
              //      Home
              //     </Button>

              // </React.Fragment>
              <>
              <p style={{fontFamily:"Ubuntu", textAlign:"center"}}>
                <Button           
                onClick={paymentdirect}
                  variant="contained"
                  color="warning"
                  sx={{ mt: 3, ml: 1 , mb:33}}                
                >
                  Complete Payment
                </Button>
                </p>
              </>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      sx={{ mt: 3, ml: 1 }}
                      variant="contained"
                      color="success"
                    >
                      <ArrowCircleLeftIcon />
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    color="warning"
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? (
                      <ForwardIcon style={{ fontSize: "1.8rem" }} />
                    ) : (
                      <ForwardIcon style={{ fontSize: "1.8rem" }} />
                    )}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
