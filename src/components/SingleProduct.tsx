import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import { ProdDescription } from "../model/ProductDescription";
import { Link } from "react-router-dom";

type Props = {
  prod: ProdDescription;
  det: boolean;
};

export const Prod: React.FC<Props> = ({ prod, det }) => {
  return (
    prod && (
      <Card sx={det ? { margin: 5, maxWidth: 500 } : {}}>
        <Link
          style={{ color: "#333", textDecoration: "none" }}
          to={det ? "/" : `/det/${prod.UPC}`}
        >
          <CardMedia
            component="img"
            height="auto"
            image="https://via.placeholder.com/350"
            alt="product"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.name}
            </Typography>
            <Typography
              sx={{ fontSize: 15 }}
              variant="body2"
              color="text.secondary"
            >
              $ {prod.price.current.value}
            </Typography>
            <Typography
              sx={{ marginTop: 1 }}
              variant="body2"
              color="text.secondary"
            >
              {prod.availability.stock > 0 ? (
                <Chip label="In stock" />
              ) : (
                <Chip label="Out of stock" variant="outlined" />
              )}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    )
  );
};
