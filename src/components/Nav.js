import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Bottoni from "./Bottoni";
import Cerca from "./Cerca";

export default function Nav({
  searchTerm,
  setSearchTerm,
  selected,
  setSelected,
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ borderBottom: 1, display: "block" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              style={{ display: "block" }}
              src="https://via.placeholder.com/150x80"
              alt="pord"
            ></img>
          </Grid>
          <Grid item xs={4}>
            <Bottoni selected={selected} setSelected={setSelected} />
          </Grid>
          <Grid item xs={4}>
            <Cerca searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
