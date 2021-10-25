import * as React from "react";
import Prod from "./Prodotto";
import { totProds } from "../data/Data";

export default function Dettaglio(props) {
  return (
    <Prod
      prod={totProds.find(
        (prod) => prod.id.toString() === props.match.params.id
      )}
      det={true}
    />
  );
}
