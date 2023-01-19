import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    size: { control: { type: "radio", options: ["big", "small", "smaller"] } },
    onClick: { control: "" },
  },
};

const Template = (args) => <Button {...args} />;

export const BigRedButton = Template.bind({});

BigRedButton.args = {
  text: "빨간버튼",
  color: "red",
  size: "big",
};

export const SmallRedButton = Template.bind({});

SmallRedButton.args = {
  text: "빨간버튼",
  color: "red",
  size: "small",
};

export const SmallerRedButton = Template.bind({});

SmallerRedButton.args = {
  text: "빨간버튼",
  color: "red",
  size: "smaller",
};

export const StorybookButton = (args) => <Button {...args}></Button>;
