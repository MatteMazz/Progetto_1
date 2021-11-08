import { useState } from "react";
import { useEffect } from "react";
import { keyframes } from "styled-components";
import styled from "styled-components";

type Props = {
  selected: string;
  setSelected: (selected: string) => void;
  onClick: (click: any) => void;
};

const ButtonCrew = styled.div`
  margin-top: 21px;
`;

const ButtonStockLeft = styled.button`
  color: #1976d2;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  padding: 9px 14px;
  background-color: #fff;
  border: 0.5px solid #1976d2;
  border-radius: 4px 0 0 4px;
  box-shadow: 0 1px 2px #999;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
    transition: 0.5s;
  }

  &.active {
    background-color: #1976d2;
    color: #fff;

    &:hover {
      background-color: rgb(21, 101, 192);
      border: 1px solid rgb(21, 101, 192);
      transition: 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    width: 40%;
    padding: 20px;
  }
`;

const ButtonStockRight = styled.button`
  color: #1976d2;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  text-decoration: none;
  padding: 9px 14px;
  background-color: #fff;
  border: 0.5px solid rgba(25, 118, 210, 0.5);
  border-radius: 0 4px 4px 0;
  box-shadow: 0 1px 2px #999;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: rgba(25, 118, 210, 0.04);
    border: 0.5px solid #1976d2;
    transition: 0.5s;
  }

  &.active {
    background-color: #1976d2;
    color: #fff;

    &:hover {
      background-color: rgb(21, 101, 192);
      border: 1px solid rgb(21, 101, 192);
      transition: 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    width: 40%;
    padding: 20px;
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

export const Buttons: React.FC<Props> = ({
  selected,
  setSelected,
  onClick,
}) => {
  // State Ripple Left //
  const [coordsLeft, setCoordsLeft] = useState({ x: -1, y: -1 });
  const [isRipplingLeft, setIsRipplingLeft] = useState(false);

  // State Ripple Right //
  const [coordsRight, setCoordsRight] = useState({ x: -1, y: -1 });
  const [isRipplingRight, setIsRipplingRight] = useState(false);

  // Effect Ripple Left //
  useEffect(() => {
    if (coordsLeft.x !== -1 && coordsLeft.y !== -1) {
      setIsRipplingLeft(true);
      setTimeout(() => setIsRipplingLeft(false), 300);
    } else setIsRipplingLeft(false);
  }, [coordsLeft]);

  useEffect(() => {
    if (!isRipplingLeft) setCoordsLeft({ x: -1, y: -1 });
  }, [isRipplingLeft]);

  // Effect Ripple Right //
  useEffect(() => {
    if (coordsRight.x !== -1 && coordsRight.y !== -1) {
      setIsRipplingRight(true);
      setTimeout(() => setIsRipplingRight(false), 300);
    } else setIsRipplingRight(false);
  }, [coordsRight]);

  useEffect(() => {
    if (!isRipplingRight) setCoordsRight({ x: -1, y: -1 });
  }, [isRipplingRight]);

  return (
    <ButtonCrew>
      <ButtonStockLeft
        className={selected === "in" ? "active" : undefined}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCoordsLeft({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          onClick && onClick(e);

          if (selected === "in") {
            setSelected("none");
          } else {
            setSelected("in");
          }
        }}
      >
        {isRipplingLeft ? (
          <Ripple
            style={{
              left: coordsLeft.x,
              top: coordsLeft.y,
            }}
          />
        ) : (
          ""
        )}
        <Content>IN STOCK</Content>
      </ButtonStockLeft>
      <ButtonStockRight
        className={selected === "out" ? "active" : undefined}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setCoordsRight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          onClick && onClick(e);

          if (selected === "out") {
            setSelected("none");
          } else {
            setSelected("out");
          }
        }}
      >
        {isRipplingRight ? (
          <Ripple
            style={{
              left: coordsRight.x,
              top: coordsRight.y,
            }}
          />
        ) : (
          ""
        )}
        <Content>OUT OF STOCK</Content>
      </ButtonStockRight>
    </ButtonCrew>
  );
};
