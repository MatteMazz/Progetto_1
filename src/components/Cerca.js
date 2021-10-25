import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function Cerca(props) {
  const [text, setText] = useState("");

  function reset() {
    setText("");
    props.cerca("");
  }

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
            value={text}
            onChange={(e) => {
              props.cerca(e.target.value);
              setText(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            sx={{ marginTop: 1 }}
            variant="contained"
            onClick={() => {
              reset();
            }}
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
