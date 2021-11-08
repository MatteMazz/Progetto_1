import * as React from "react";
import { CssBaseline } from "@mui/material";
import { Buttons } from "./Buttons";
import { Search } from "./Search";
import styled from "styled-components";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  selected: string;
  setSelected: (selected: string) => void;
  onClick: (click: any) => void;
};

const NavBox = styled.div`
  border-bottom: 1px solid #333;
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const NavItems = styled.div`
  width: 33.3%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavImg = styled.img`
  display: block;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Nav: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  selected,
  setSelected,
  onClick,
}) => {
  return (
    <React.Fragment>
      <NavBox>
        <CssBaseline />
        <NavItems>
          <NavImg src="https://via.placeholder.com/150x80"></NavImg>
        </NavItems>
        <NavItems>
          <Buttons
            selected={selected}
            setSelected={setSelected}
            onClick={onClick}
          />
        </NavItems>
        <NavItems>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onClick={onClick}
          />
        </NavItems>
      </NavBox>
    </React.Fragment>
  );
};
