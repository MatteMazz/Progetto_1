import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Bottoni(props) {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button variant="outlined" onClick={() => props.toggle("all")}>
        ALL
      </Button>
      <Button variant="outlined" onClick={() => props.toggle("in")}>
        IN STOCK
      </Button>
      <Button variant="outlined" onClick={() => props.toggle("out")}>
        OUT OF STOCK
      </Button>
    </ButtonGroup>
  );
}
  