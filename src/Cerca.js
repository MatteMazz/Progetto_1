import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Cerca(props) {
  const [text, setText] = useState("");

  function reset() {
    console.log("Hai chiamato il reset");
    setText("");
    props.cerca("");
  }

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={text}
        onChange={(e) => {
          props.cerca(e.target.value);
          setText(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </Button>
    </Box>
  );
}
