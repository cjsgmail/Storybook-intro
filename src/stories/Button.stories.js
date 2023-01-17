import Button from "./Button";

export default {
  title: "Practice/Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    size: { control: { type: "radio", options: ["big", "small"] } },
  },
};

const Template = (args) => <Button {...args} />;

export const BigRedButton = Template.bind({});

BigRedButton.args = {
  text: "빨간버튼",
  color: "red",
  size: "big",
};

export const StorybookButton = (args) => <Button {...args}></Button>;
