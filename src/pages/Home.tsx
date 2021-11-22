import styled from "styled-components";
import { useSelector } from "react-redux";
import { Nav } from "../components/Nav";
import { Prod } from "../components/SingleProduct";
import { Product } from "../data/Data";
import { Footer } from "../components/Footer";
import { RootState } from "../app/store";

const Container = styled.div`
  font-family: Roboto, Helvetica, Arial, sans-serif;
  position: relative;
  min-height: 100vh;
`;

const HomeCardContainer = styled.div`
  width: 99%;
  margin: 2rem auto 0 auto;
  padding-bottom: 80px;
`;

const HomeCardGrid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  row-gap: 1.5rem;

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
  const toggle = useSelector((state: RootState) => state.toggle.value);
  const searchTerm = useSelector((state: RootState) => state.search.value);

  return (
    <Container>
      <Nav onClick={function (click: any): void {}} />
      <HomeCardContainer>
        <HomeCardGrid>
          {data
            ?.filter((prod: { availability: { stock: number } }) => {
              const inStock = toggle === "in" && prod.availability.stock > 0;
              const outStock = toggle === "out" && prod.availability.stock <= 0;
              return inStock || outStock || toggle === "none" ? true : false;
            })
            .filter((prod: { name: string }) => {
              const searchName = prod.name.toLowerCase().includes(searchTerm);
              return searchName ? true : false;
            })
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
