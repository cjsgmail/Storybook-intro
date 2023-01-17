import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background-color: ${(props) => props.color || "white"};
  width: ${(props) => (props.size === "big" ? "200px" : "100px")};
  height: ${(props) => (props.size === "big" ? "100px" : "50px")};
  border: none;
  border-radius: 10px;
`;

export default function Button({ color, size, text }) {
  return (
    <StyledButton color={color} size={size}>
      {text}
    </StyledButton>
  );
}
