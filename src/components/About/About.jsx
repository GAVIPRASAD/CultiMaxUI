import React, { useEffect, useState } from "react";
import Metadata from "../../more/Metadata";
import Appbar from "../../components/Home/Appbar";
import Footer from "../../components/Home/Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, CardMedia, Container, FormControl, Input, TextField, TextareaAutosize, Typography } from "@mui/material";
import NearMeSharpIcon from '@mui/icons-material/NearMeSharp';
import "./About.css";
import logo from "../../utils/Images/Back/Cultimax.jpg";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "../../actions/ContactFormAction";
import { clearErrors } from "../../actions/MLAction";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const About = () => {

  const { error, loading, contactForm } = useSelector(
    (state) => state.contactForm
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [val,setVal] = useState(false);
  const dispatch = useDispatch();
  // console.log(formm);
  const handleSubmit=(e)=>{
    e.preventDefault();
      if(validator.isEmail(email)){
        const formm = {
          "name":name,
          "email":email,
          "message":message
        }
        dispatch(submitContactForm(formm))
        setVal(true)
        setEmail("")
        setMessage("")
        setName("")
        
    }
    else{
      toast.error("Enter Valid Email....")
    }

  }

  useEffect(() => {
    if (error) {
      toast.error("Email Already Exists");
      dispatch(clearErrors());
    }
  }, [dispatch,contactForm,error]);

  return (
    <div>
      <Metadata title={"About"} />
      <Appbar />
      <Container
        maxWidth="lg"
        style={{
          backgroundColor: "#F9F9EF",
          borderRadius: "10px",
          padding: "0.5rem",
          marginTop: "0.6rem",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Item>
                <Typography
                  component="h5"
                  color="orange"
                  variant="h4"
                  style={{ fontFamily: "Ubuntu" }}
                  className={"hello"}
                >
                  CULTIMAX
                </Typography>
               
                <Typography
                  component="h6"
                  color="green"
                  variant="h6"
                  style={{ fontFamily: "Ubuntu" }}
                  className={"hello"}
                >
                  One Stop Destination For All Farming Needs......!
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={7}>
              <Item>
                <>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.225232139385!2d77.63072588173468!3d13.116972423980545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae196d75cd82a3%3A0xb40b6b9a7c5ea3f4!2s67%2FA%2C%20SH%20104%2C%20Srinivasa%20Nagar%2C%20Bengaluru%2C%20Sathanur%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1693237145229!5m2!1sen!2sin"
                    width="350"
                    height="400"
                    // className={"mapp"}
                    style={{
                      border: "1px solid rgb(173, 156, 0)",
                      borderRadius: "5px",
                    }}
                    allowFullScreen=""
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </>
              </Item>
            </Grid>
            <Grid item xs={12} md={5}>
              <Item>
                <div style={{display:"flex", justifyContent:"center" }}>
              <CardMedia
                    component={Box}
                    className="cardImage"
                    id="cardImage"
                    style={{ height: 100, width: 200, borderRadius:"10px", margin:"1.1rem 0rem" }}
                    image={logo}
                    title={"Cultimax"}
                  />
                  </div>
                <Typography
                  component="h5"
                  color="rgb(173, 156, 0)"
                  variant="h5"
                  style={{ fontFamily: "Ubuntu" }}
                >
                  Contact US
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <FormControl>
                    <TextField
                      required
                      label="Name"
                      size="small"
                      value={name}
                      color="success"
                      onChange={(e)=> {setName(e.target.value)}}
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                    />
                  </FormControl>
                    <br />
                  <FormControl>
                    <TextField
                      required
                      label="Email"
                      size="small"
                      value={email}
                      color="success"
                      onChange={(e)=> {setEmail(e.target.value)}}
                      style={{ paddingBottom: "5px", marginBottom: "0.6rem" }}
                    />
                  </FormControl>
                  <br />
                  <FormControl>
                    <textarea
                      required
                      label="Message"
                      size="small"
                      placeholder="Message"
                      value={message}
                      color="success"
                      multiline
                      maxRows={4}
                      cols={26}
                      onChange={(e)=> {setMessage(e.target.value)}}
                      style={{ padding: "6px", border:"1px solid #c2bba9", borderRadius:"5px" }}
                      
                    />
                  </FormControl>
                  <br />
                  
                  <Button variant="contained" color="success" type="submit" style={{margin:"1rem"}}>
                    Send
                  <NearMeSharpIcon/>
                    </Button>
                  {val?(loading?"":contactForm&&contactForm?`Submitted`:""):""}
                </Box>
              </Item>
            </Grid>
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
        limit={1}
        theme="light"
      />
    </div>
  );
};

export default About;
