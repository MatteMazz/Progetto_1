import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Bottoni from "./Bottoni";
import Cerca from "./Cerca";

export default function Nav(props) {
  function cerca(text) {
    props.cerca(text);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ borderBottom: 1, display: "block" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src="https://via.placeholder.com/150x80" alt="pord"></img>
          </Grid>
          <Grid item xs={4}>
            <Bottoni toggle={props.toggle} />
          </Grid>
          <Grid item xs={4}>
            <Cerca cerca={cerca} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
