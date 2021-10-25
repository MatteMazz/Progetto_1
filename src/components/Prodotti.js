import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Prod from "./Prodotto.js";
import Nav from "./Nav";
import Footer from "./Footer.js";
import { totProds } from "../data/Data";

export default function Prodotti() {
  const [selected, setSelected] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");

  const search = (prod) => {
    const searchName = prod.name.toLowerCase().includes(searchTerm);
    const searchPrice = prod.price.toLowerCase().includes(searchTerm);
    return searchName || searchPrice ? true : false;
  };

  const toggle = (prod) => {
    const inStock = selected === "in" && prod.availability.stock > 0;
    const outStock = selected === "out" && prod.availability.stock <= 0;
    return inStock || outStock || selected === "none" ? true : false;
  };

  return (
    <Grid container direction="column" minHeight="100vh">
      <Grid item xs={12}>
        <Nav
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid
          minHeight="100vh"
          container
          p={2}
          spacing={2}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {totProds
            ?.filter(toggle)
            .filter(search)
            .map((prod, index) => (
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
