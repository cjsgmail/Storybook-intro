import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
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
  border: none;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.03);
  }
`;

export default function Button({ color, size, text, onClick }) {
  return (
    <StyledButton color={color} size={size} onClick={onClick}>
      {text}
    </StyledButton>
  );
}
