import { useState } from "react";
import Grid from "@mui/material/Grid";
import { Prod } from "./SingleProduct";
import { totProds } from "../data/Data";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export const Home: React.FC = () => {
  const [selected, setSelected] = useState<string>("none");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const search = (prod: { name: string }) => {
    const searchName = prod.name.toLowerCase().includes(searchTerm);
    return searchName ? true : false;
  };

  const toggle = (prod: { availability: { stock: number } }) => {
    const inStock = selected === "in" && prod.availability.stock > 0;
    const outStock = selected === "out" && prod.availability.stock <= 0;
    return inStock || outStock || selected === "none" ? true : false;
  };

  return (
    <Grid container direction="column" style={{ minHeight: "100vh" }}>
      <Grid item xs={12}>
        <Nav
          selected={selected}
          setSelected={setSelected}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </Grid>
      <Grid flex={1} item xs={12}>
        <Grid
          p={2}
          container
          spacing={{ xs: 1, md: 2 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
        >
          {totProds
            ?.filter(toggle)
            .filter(search)
            .map((prod, index) => (
              <Grid item xs={2} sm={4} md={3} key={index}>
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
};
