import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Container, TextField } from "@mui/material";
import Appbar from "../Home/Appbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: "1.2rem",
  color: theme.palette.text.secondary,
}));

export default function Search() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchSubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
        navigate(`/products/key/${keyword}`);
      } else {
        navigate("/products");
      }

  };
  return (
    <>
      <Appbar />
      <Container
        maxWidth="lg"
        style={{
          //   backgroundColor: "#F9F9EF",
          borderRadius: "2px",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={10}>
              <Item>
                <Box
                  component="form"
                  noValidate
                  onSubmit={searchSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid
                    container
                    spacing={2}
                    style={{ padding: "0.2rem 1.2rem" }}
                  >
                    <Grid item xs={8} md={10}>
                      <TextField
                        name="sear"
                        required
                        fullWidth
                        id="se"
                        label="Search Here"
                        onChange={(e) => setKeyword(e.target.value)}
                        style={{
                          borderBottom: "2px solid orange",
                          borderRadius: "10px",
                          marginTop: "0",
                          marginBottom: "1.2rem",
                        }}
                      />
                    </Grid>
                    <Grid item xs={3} md={2}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        sx={{ mt: 1, mb: 2 }}
                      >
                        Search
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
