import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

export default function Prod(props) {
  return (
    <Card sx={props.det ? { margin: 5, maxWidth: 500 } : {}}>
      <CardActionArea href={props.det ? "/" : `/det/${props.prod.UPC}`}>
        <CardMedia
          component="img"
          height="auto"
          image="https://via.placeholder.com/350"
          alt="prodotto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.prod.name}
          </Typography>
          <Typography
            sx={{ fontSize: 15 }}
            variant="body2"
            color="text.secondary"
          >
            $ {props.prod.price.current.value}
          </Typography>
          <Typography
            sx={{ marginTop: 1 }}
            variant="body2"
            color="text.secondary"
          >
            {props.prod.availability.stock > 0 ? (
              <Chip label="In stock" />
            ) : (
              <Chip label="Out of stock" variant="outlined" />
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
