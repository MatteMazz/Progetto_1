import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "../components/Nav";
import { Product } from "../data/Data";
import { Footer } from "../components/Footer";
import { selectVariants, setVariants } from "../features/slicers/variantSlice";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px;

  @media screen and (max-width: 576px) {
    width: 100%;
    margin: 0px auto;
    padding-bottom: 30px;
  }
`;

const ProdDetail = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 576px) {
    display: block;
    width: 95%;
  }
`;

const DetailLeft = styled.div`
  width: 60%;

  @media screen and (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`;

const DetailRight = styled.div`
  width: 40%;
  padding-left: 50px;

  @media screen and (max-width: 576px) {
    width: 100%;
    padding-left: 0;
    display: flex;
    align-items: flex-end;
  }
`;

const DetailCode = styled.h1`
  @media screen and (max-width: 576px) {
    margin-bottom: 10px;
  }
`;

const DetailImg = styled.img`
  width: 100%;
  height: auto;
`;

const DetailInfo = styled.div`
  @media screen and (max-width: 576px) {
    width: 50%;
  }
`;

const DetailDesc = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 800;
`;

const DetailPrice = styled.p`
  font-size: 1.3rem;
  margin: 0;
  font-weight: 500;
`;

const DetailDetail = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;

  @media screen and (max-width: 576px) {
    margin-bottom: 0;
    margin-top: 5px;
  }
`;

const DetailText = styled.li`
  font-weight: 500;
  color: #777;
  font-size: 1.1rem;
`;

const Bold = styled.p`
  display: inline;
  font-weight: 800;
  color: #333;
`;

const DetailAdd = styled.div`
  @media screen and (max-width: 576px) {
    width: 50%;
    text-align: right;
  }
`;

const Add = styled.a`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px 25px;
  font-weight: 700;
  cursor: pointer;
  height: auto;
`;

const ProdVariants = styled.div`
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 576px) {
    width: 95%;
    margin: 50px auto;
  }
`;

const VariantsTitle = styled.h3`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const VariantsList = styled.div`
  overflow-y: hidden;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const VariantsItem = styled.img`
  margin-right: 25px;
  margin-bottom: 25px;
  width: 200px;
  height: 150px;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

type Props = {
  prod: Product;
};

export const DetailContent: React.FC<Props> = ({ prod }) => {
  const variant = useSelector(selectVariants);
  const dispatch = useDispatch();

  return prod ? (
    <Container>
      <Nav onClick={function (click: any): void {}} />

      <ProdDetail>
        <DetailLeft>
          <DetailCode>{prod.name}</DetailCode>
          <DetailImg
            src={`https://picsum.photos/700/350?random=${
              variant ? variant.UPC : prod.UPC
            }`}
          />
        </DetailLeft>

        <DetailRight>
          <DetailInfo>
            <DetailDesc>{variant ? variant.name : prod.name}</DetailDesc>
            <DetailPrice>
              {variant ? variant.price.current.value : prod.price.current.value}{" "}
              {variant ? variant.price.currency : prod.price.currency}
            </DetailPrice>
            <DetailDetail>
              <DetailText>
                Name: <Bold>{variant ? variant.name : prod.name}</Bold>
              </DetailText>
              <DetailText>
                Lens color: <Bold>Lorem</Bold>
              </DetailText>
              <DetailText>
                Size: <Bold>Lorem</Bold>
              </DetailText>
              <DetailText>
                UPC: <Bold>{variant ? variant.UPC : prod.UPC}</Bold>
              </DetailText>
            </DetailDetail>
          </DetailInfo>
          <DetailAdd>
            <Add>Add to cart</Add>
          </DetailAdd>
        </DetailRight>
      </ProdDetail>

      <ProdVariants>
        <VariantsTitle>Aviable colors:</VariantsTitle>
        <VariantsList>
          <VariantsItem
            alt={`img${prod.UPC}`}
            src={`https://picsum.photos/700/350?random=${prod.UPC}`}
            onClick={() => {
              dispatch(setVariants(prod));
            }}
          />
          {prod.variants.map((item: any) => {
            return (
              <VariantsItem
                onClick={() => {
                  dispatch(setVariants(item));
                }}
                alt={`img${item.UPC}`}
                src={`https://picsum.photos/700/350?random=${item.UPC}`}
              />
            );
          })}
        </VariantsList>
      </ProdVariants>

      <Footer />
    </Container>
  ) : null;
};
  