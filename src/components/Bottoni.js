import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function Bottoni(props) {
  return (
    <ButtonGroup sx={{ marginTop: 3 }}>
      <Button
        variant={value === "in" ? "contained" : "outlined"}
        onClick={() => {
          if (value === "in") {
            setToggle("none");
            props.updateToggle("none");
          } else {
            setToggle("in");
            props.updateToggle("in");
          }
        }}
      >
        IN STOCK
      </Button>
      <Button
        variant={value === "out" ? "contained" : "outlined"}
        onClick={() => {
          if (value === "out") {
            setToggle("none");
            props.updateToggle("none");
          } else {
            setToggle("in");
            props.updateToggle("in");
          }
        }}
      >
        OUT OF STOCK
      </Button>
    </ButtonGroup>
  );
}

// type Props = {
//   setInStock: (flag?: boolean) => void
//   inStock?: boolean
// }

// const Menu: React.FC<Props> = ({ setInStock, inStock }) => {
//   return (
//     <ButtonGroup variant="contained" >
//       <Button variant={inStock === true ? 'contained' : 'outlined'} onClick={() => setInStock(inStock === undefined ? true : undefined)}>In Stock</Button>
//       <Button variant={inStock === false ? 'contained' : 'outlined'} onClick={() => setInStock(inStock === undefined ? false : undefined)}>Out of Stock</Button>
//     </ButtonGroup>
//   )
// }
