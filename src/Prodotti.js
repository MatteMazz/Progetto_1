import * as React from "react";
import { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Prod from "./Prodotto.js";
import Nav from "./Nav.js";
import { totProds } from "./Data.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Prodotti() {
  const [prods, setProds] = useState(totProds);

  const cerca = (text) => {
    var newProds = [];
    totProds.map((prod, index) => {
      if (prod.name.toLowerCase().includes(text)) {
        newProds.push(prod);
      }
    });
    setProds(newProds);
  };

  const toggle = (value) => {
    var newProds = [];
    totProds.map((prod, index) => {
      if (value === "in") {
        if (prod.availability.stock > 0) {
          newProds.push(prod);
        }
      } else if (value === "out") {
        if (prod.availability.stock <= 0) {
          newProds.push(prod);
        }
      } else {
        newProds = totProds;
      }
    });
    setProds(newProds);
  };

  return (
    <React.Fragment>
      <Nav
        cerca={(text) => {
          cerca(text);
        }}
        toggle={(value) => {
          toggle(value);
        }}
      />
      <CssBaseline />
      <Container maxWidth="false">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {prods &&
              prods.map((prod, index) => (
                <Grid item xs={3} sm={3} md={3} key={index}>
                  <Prod
                    id={prod.id}
                    img={prod.img}
                    name={prod.name}
                    price={prod.price}
                    availability={prod.availability}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
