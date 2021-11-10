import { Prod } from "../components/SingleProduct";
import { Product } from "../data/Data";
import { useParams } from "react-router-dom";

type Props = {
  data: Product[];
};

export const Detail: React.FC<Props> = ({ data }) => {
  const { UPC } = useParams<{ UPC: string }>();
  const prods = data.find((prod) => prod.UPC === UPC);

  return prods ? <Prod prod={prods} det={true} /> : null;
};
