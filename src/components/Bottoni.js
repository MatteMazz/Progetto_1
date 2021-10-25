import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Bottoni({ selected, setSelected }) {
  return (
    <ButtonGroup sx={{ marginTop: 2.5 }}>
      <Button
        variant={selected === "in" ? "contained" : "outlined"}
        onClick={() => {
          if (selected === "in") {
            setSelected("none");
          } else {
            setSelected("in");
          }
        }}
      >
        IN STOCK
      </Button>
      <Button
        variant={selected === "out" ? "contained" : "outlined"}
        onClick={() => {
          if (selected === "out") {
            setSelected("none");
          } else {
            setSelected("out");
          }
        }}
      >
        OUT OF STOCK
      </Button>
    </ButtonGroup>
  );
}
