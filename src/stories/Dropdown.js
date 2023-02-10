import { useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const DropUl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.8px solid black;
  background-color: ${(props) => props.color || "white"};
  width: ${(props) => {
    if (props.size === "big") {
      return "120px";
    } else if (props.size === "small") {
      return "100px";
    } else {
      return "80px";
    }
  }};
  height: ${(props) => {
    if (props.size === "big") {
      return "60px";
    } else if (props.size === "small") {
      return "50px";
    } else {
      return "40px";
    }
  }};
  &:hover {
    cursor: pointer;
  }
`;
const DropLi = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.8px solid black;
  border-top: none;
  background-color: ${(props) => props.color || "white"};
  width: ${(props) => {
    if (props.size === "big") {
      return "120px";
    } else if (props.size === "small") {
      return "100px";
    } else {
      return "80px";
    }
  }};
  height: ${(props) => {
    if (props.size === "big") {
      return "60px";
    } else if (props.size === "small") {
      return "50px";
    } else {
      return "40px";
    }
  }};
  &:hover {
    cursor: pointer;
  }
`;

export default function Dropdown({ color, size }) {
  const [OnDrop, setOnDrop] = useState(false);
  const [menu, setMenu] = useState("DropDown");

  return (
    <DropDownContainer>
      <DropUl
        color={color}
        size={size}
        onClick={() => {
          setOnDrop(!OnDrop);
        }}
      >
        {menu}
      </DropUl>
      {OnDrop ? (
        <>
          <DropLi
            color={color}
            size={size}
            onClick={() => {
              setMenu("메뉴 1");
              setOnDrop(!OnDrop);
            }}
          >
            메뉴 1
          </DropLi>
          <DropLi
            color={color}
            size={size}
            onClick={() => {
              setMenu("메뉴 2");
              setOnDrop(!OnDrop);
            }}
          >
            메뉴 2
          </DropLi>
        </>
      ) : null}
    </DropDownContainer>
  );
}
