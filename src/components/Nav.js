import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Buttons from "./Buttons";
import Search from "./Search";

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
          <Grid item xs={12} sm={4} md={4}>
            <img
              style={{ display: "block" }}
              src="https://via.placeholder.com/150x80"
              alt="prod"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Buttons selected={selected} setSelected={setSelected} />
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
