import { useState } from "react";
import { useEffect } from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  onClick: (click: any) => void;
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const FlexItemL = styled.div`
  width: 65%;

  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

const FlexItemS = styled.div`
  width: 34%;

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;

const SearchBox = styled.div`
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 20px auto;
  }
`;

const SearchBoxField = styled.div`
  position: relative;
  display: flex;
`;

const SearchField = styled.input`
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  padding: 17px 12px;
  width: 100%;
  border: 1px solid rgb(100, 100, 100, 0.5);
  border-radius: 5px;

  &:focus {
    outline: none;
    border: 2px solid #1976d2;
  }
`;

const SearchText = styled.label`
  color: #777;
  font-size: 1.1rem;
  font-weight: 400;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 15px;
  transition: 0.2s ease all;

  ${SearchField}:focus ~ & {
    top: -15px;
    font-size: 0.8rem;
    padding: 5px;
    color: #1976d2;
    background-color: white;
  }

  &.up {
    top: -15px;
    font-size: 0.8rem;
    padding: 5px;
    color: #1976d2;
    background-color: white;
  }
`;

const RippleEffect = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(10);
    opacity: 0.375;
  }
  100% {
    transform: scale(35);
    opacity: 0;
  }
`;

const Ripple = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  background: #63a4ff;
  display: block;
  content: "";
  border-radius: 9999px;
  opacity: 1;
  animation: 2s ease 1 forwards ${RippleEffect};
`;

const Content = styled.span`
  position: relative;
  z-index: 2;
`;

const BlueButton = styled.button`
  color: #fff;
  font-size: 0.9rem;
  background-color: #1976d2;
  border: 1px solid #1976d2;
  border-radius: 5px;
  padding: 8px 20px;
  box-shadow: 0 1px 2px #999;
  margin: 10px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: rgb(21, 101, 192);
    border: 1px solid rgb(21, 101, 192);
    transition: 0.5s;
  }

  @media screen and (max-width: 768px) {
    padding: 18px 30px;
    width: 90%;
    margin: 0 auto;
  }
`;

export const Search: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  onClick,
}) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <SearchBox>
      <FlexContainer>
        <FlexItemL>
          <SearchBoxField>
            {" "}
            <SearchField
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <SearchText className={searchTerm === "" ? "" : "up"}>
              search
            </SearchText>{" "}
          </SearchBoxField>
        </FlexItemL>
        <FlexItemS>
          <BlueButton
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              onClick && onClick(e);

              setSearchTerm("");
            }}
          >
            {isRippling ? (
              <Ripple
                style={{
                  left: coords.x,
                  top: coords.y,
                }}
              />
            ) : (
              ""
            )}
            <Content>RESET</Content>
          </BlueButton>
        </FlexItemS>
      </FlexContainer>
    </SearchBox>
  );
};
