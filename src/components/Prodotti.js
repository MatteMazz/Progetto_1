import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Prod from "./Prodotto.js";
import Nav from "./Nav";
import Footer from "./Footer.js";
import { totProds } from "../data/Data";

export default function Prodotti() {
  // const [inStock, setInStock] = useState<boolean | undefined>(undefined)
  const [toggle, setToggle] = useState("none");
  const [prods, setProds] = useState(totProds);

  const cerca = (text) => {
    var newProds = totProds.filter((prod) => {
      const searchName = prod.name.toLowerCase().includes(text);
      const searchPrice = prod.price.toLowerCase().includes(text);
      return searchName || searchPrice ? true : false;
    });
    setProds(newProds);
  };

  const selected = (value) => {
    var newProds = totProds.filter((prod) => {
      const inStock = value === "in" && prod.availability.stock > 0;
      const outStock = value === "out" && prod.availability.stock <= 0;
      return inStock || outStock ? true : false;
    });
    setToggle(newProds);
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Nav cerca={cerca} toggle={selected} />
      </Grid>
      <Grid item xs={12}>
        <Grid
          minHeight="100vh"
          container
          p={2}
          spacing={2}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {/* .filter(product => inStock === undefined ? true : inStock ? product.availability.stock > 0 : product.availability.stock === 0) */}
          {prods?.map((prod, index) => (
            <Grid item xs={3} sm={3} md={3} key={index}>
              <Prod prod={prod} det={false} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
