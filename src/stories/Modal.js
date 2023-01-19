import { useState } from "react";
import styled from "styled-components";
import { StorybookButton } from "./Button.stories";

const ModalBackDrop = styled.div`
  background: rgba(225, 225, 225, 0.831);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 9000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalView = styled.div`
  position: fixed;
  background-color: white;
  min-width: 360px;
  width: ${(props) => (props.size === "big" ? "40%" : "30%")};
  height: ${(props) => (props.size === "big" ? "30%" : "20%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  z-index: 9999;
`;

const CheckMessage = styled.div`
  margin-bottom: 10px;
  font-size: 30px;
`;

const BtnGroup = styled.div`
  display: flex;
`;

export default function Modal({ size, text }) {
  const [onModal, setOnModal] = useState(false);

  const handleModal = () => {
    setOnModal(true);
  };

  return (
    <>
      <StorybookButton
        text={"모달버튼"}
        size={"big"}
        color={"skyblue"}
        onClick={handleModal}
      />
      {onModal ? (
        <ModalBackDrop>
          <ModalView size={size}>
            <CheckMessage>{text}</CheckMessage>
            <BtnGroup>
              <StorybookButton
                size="smaller"
                color="skyblue"
                text="확인"
                onClick={(e) => {
                  e.preventDefault();
                  setOnModal(false);
                }}
              />
              <StorybookButton
                size="smaller"
                color="skyblue"
                text="취소"
                onClick={(e) => {
                  e.preventDefault();
                  setOnModal(false);
                }}
              />
            </BtnGroup>
          </ModalView>
        </ModalBackDrop>
      ) : null}
    </>
  );
}
