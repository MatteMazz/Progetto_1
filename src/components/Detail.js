import * as React from "react";
import Prod from "./SingleProduct";
import { totProds } from "../data/Data";

export default function Detail(props) {
  return (
    <Prod
      prod={totProds.find((prod) => prod.UPC === props.match.params.UPC)}
      det={true}
    />
  );
}
