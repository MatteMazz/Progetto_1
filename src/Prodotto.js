import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

export default function Prod(props) {
  return (
    <Card>
      <CardActionArea href={`/det/${props.id}`}>
        <CardMedia
          component="img"
          height="auto"
          image={props.img}
          alt="prodotto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.availability.stock > 0 ? (
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
