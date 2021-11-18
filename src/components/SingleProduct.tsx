import { Product } from "../data/Data";
import { CssBaseline } from "@mui/material";
import styled from "styled-components";

const CardProd = styled.div`
  width: 97%;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 1px 2px #999;

  &.active {
    width: 500px;
    margin: 30px 0 0 30px;

    @media screen and (max-width: 576px) {
      width: 90%;
      margin: 10px auto;
    }
  }
`;

const CardLink = styled.a`
  color: #333;
  text-decoration: none;
`;

const CardImg = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  height: auto;
`;

const CardCont = styled.div`
  padding: 8px 16px 24px 16px;
`;

const CardTitle = styled.h5`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0em;
  margin: 0;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 0 0 15px 0;
`;

const CardInStock = styled.span`
  padding: 8px 12px;
  color: #333;
  font-size: 0.8rem;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: #00000014;
`;

const CardOutStock = styled.span`
  display: none;
`;

type Props = {
  prod: Product;
  det: boolean;
};

export const Prod: React.FC<Props> = ({ prod, det }) => {
  return (
    prod && (
      <CardProd className={det ? "active" : undefined}>
        <CssBaseline />
        <CardLink href={det ? "/" : `/det/${prod.UPC}`}>
          <CardImg src="https://via.placeholder.com/350" />
          <CardCont>
            <CardTitle>{prod.name}</CardTitle>
            <CardText>$ {prod.price.current.value}</CardText>
            <div>
              {prod.availability.stock > 0 ? (
                <CardInStock>in stock</CardInStock>
              ) : (
                <CardOutStock>out of stock</CardOutStock>
              )}
            </div>
          </CardCont>
        </CardLink>
      </CardProd>
    )
  );
};
