import styled from "styled-components";
import { StorybookButton } from "./stories/Button.stories";
import { StorybookDropdown } from "./stories/Dropdown.stories";
import { StorybookModal } from "./stories/Modal.stories";
import { StorybookTitle } from "./stories/Title.stories";

function App() {
  return (
    <>
      <StorybookTitle
        title={"스토리북으로 디자인 시스템 관리하기"}
        textColor={"grey"}
      />
      <Container>
        <ComponentContainer>
          <ComponentTitle>Button</ComponentTitle>
          <StorybookButton text={"확인"} size={"smaller"} color={"skyblue"} />
          <StorybookButton text={"확인"} size={"small"} color={"skyblue"} />
          <StorybookButton text={"확인"} size={"big"} color={"skyblue"} />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentTitle>Modal</ComponentTitle>
          <StorybookModal text={"확인하겠습니까?"} size={"big"} />
        </ComponentContainer>
        <ComponentContainer>
          <ComponentTitle>DropDown</ComponentTitle>
          <StorybookDropdown color={"white"} size={"smaller"} />
          <StorybookDropdown color={"white"} size={"small"} />
          <StorybookDropdown color={"white"} size={"big"} />
        </ComponentContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

const ComponentContainer = styled.div`
  position: relative;
  width: 70%;
  height: 400px;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentTitle = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: 25px;
  font-size: 20px;
  background-color: white;
  color: gray;
  font-weight: bold;
`;
