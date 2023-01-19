import Modal from "./Modal";

export default {
  title: "Practice/Modal",
  component: Modal,
  argTypes: {
    text: { control: "text" },
    size: { control: { type: "radio", options: ["big", "small"] } },
  },
};

const Template = (args) => <Modal {...args} />;

export const BigModal = Template.bind({});

BigModal.args = {
  text: "확인하겠습니까?",
  size: "big",
};

export const SmallModal = Template.bind({});

SmallModal.args = {
  text: "확인하겠습니까?",
  size: "small",
};

export const StorybookModal = (args) => <Modal {...args}></Modal>;
