import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Bottoni from "./Bottoni.js";
import Cerca from "./Cerca.js";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Nav(props) {
  function cerca(text) {
    props.cerca(text);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src="https://picsum.photos/id/238/150/80" alt="pord"></img>
          </Grid>
          <Grid item xs={4}>
            <Bottoni
              toggle={(value) => {
                props.toggle(value);
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Cerca
              cerca={(text) => {
                cerca(text);
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
