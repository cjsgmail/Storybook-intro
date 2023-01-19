import { StorybookButton } from "./stories/Button.stories";
import { StorybookModal } from "./stories/Modal.stories";
import { StorybookTitle } from "./stories/Title.stories";

function App() {
  return (
    <>
      <StorybookTitle
        title={"스토리북으로 디자인 시스템 관리하기"}
        textColor={"grey"}
      />
      <StorybookButton text={"확인"} size={"small"} color={"skyblue"} />
      <StorybookButton text={"취소"} size={"big"} color={"skyblue"} />
      <StorybookModal text={"확인하겠습니까?"} size={"big"} />
    </>
  );
}

export default App;
