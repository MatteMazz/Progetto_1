import { Prod } from "./SingleProduct";
import { totProds } from "../data/Data";
import { useParams } from "react-router-dom";

export const Detail: React.FC = () => {
  const { UPC } = useParams<{ UPC: string }>();
  const prod = totProds.find((prod) => prod.UPC === UPC);

  return prod ? <Prod prod={prod} det={true} /> : null;
};
