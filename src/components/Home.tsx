import { useState } from "react";
import { Prod } from "./SingleProduct";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import styled from "styled-components";
import { Product } from "../data/Data";

const Container = styled.div`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  position: relative;
  min-height: 100vh;
`;

const HomeCardContainer = styled.div`
  width: 99%;
  margin: 20px auto 0 auto;
  padding-bottom: 80px;
`;

const HomeCardGrid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  row-gap: 15px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 33.3% 33.3% 33.3%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 50% 50%;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 100%;
  }
`;

const HomeCardItems = styled.div`
  justify-self: stretch;
`;

type Props = {
  data: Product[];
};

export const Home: React.FC<Props> = ({ data }) => {
  const [selected, setSelected] = useState("none" || "in" || "out");
  const [searchTerm, setSearchTerm] = useState("");

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
    <Container>
      <Nav
        selected={selected}
        setSelected={setSelected}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onClick={function (click: any): void {}}
      />
      <HomeCardContainer>
        <HomeCardGrid>
          {data
            ?.filter(toggle)
            .filter(search)
            .map((prod, index) => (
              <HomeCardItems key={index}>
                <Prod prod={prod} det={false} />
              </HomeCardItems>
            ))}
        </HomeCardGrid>
      </HomeCardContainer>
      <Footer />
    </Container>
  );
};
