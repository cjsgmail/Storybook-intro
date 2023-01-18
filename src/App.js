import { useState } from "react";
import { StorybookButton } from "./stories/Button.stories";
import { StorybookModal } from "./stories/Modal.stories";

function App() {
  const [onModal, setOnModal] = useState(false);

  const handleModal = () => {
    setOnModal(true);
  };

  console.log(onModal);
  return (
    <>
      <StorybookButton text={"확인"} size={"small"} color={"skyblue"} />
      <StorybookButton text={"취소"} size={"big"} color={"skyblue"} />
      <StorybookButton
        text={"모달버튼"}
        size={"big"}
        color={"skyblue"}
        onClick={handleModal}
      />
      {onModal ? (
        <StorybookModal
          text={"확인하겠습니까?"}
          size={"big"}
          setOnModal={setOnModal}
        />
      ) : null}
    </>
  );
}

export default App;
