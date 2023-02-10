import Dropdown from "./Dropdown";

export default {
  title: "Practice/Dropdown",
  component: Dropdown,
  argTypes: {
    color: { control: "color" },
    size: { control: { type: "radio", options: ["big", "small", "smaller"] } },
  },
};

const Template = (args) => <Dropdown {...args} />;

export const StorybookDropdown = (args) => <Dropdown {...args} />;
