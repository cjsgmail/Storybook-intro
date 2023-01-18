import Modal from "./Modal";

export default {
  title: "Practice/Modal",
  component: Modal,
  argTypes: {
    text: { control: "text" },
    size: { control: { type: "radio", options: ["big", "small"] } },
  },
};

export const StorybookModal = (args) => <Modal {...args}></Modal>;
