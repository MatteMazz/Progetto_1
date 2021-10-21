import * as React from "react";
import { totProds } from "./Data.js";
import Prod from "./Prodotto.js";

export default function Dettaglio(props) {
  const id = props.match.params.id;
  const prod = totProds.find((prod) => prod.id == id);

  return (
    <Prod
      id={prod.id}
      img={prod.img}
      name={prod.name}
      price={prod.price}
      availability={prod.availability}
    />
  );
}
