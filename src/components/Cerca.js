import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function Cerca({ searchTerm, setSearchTerm }) {
  return (
    <Box
      sx={{
        marginTop: 1.5,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{ marginTop: 1 }}
            variant="contained"
            onClick={() => {
              setSearchTerm("");
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
