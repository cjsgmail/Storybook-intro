import Title from "./Title";

export default {
  title: "Practice/Title",
  component: Title,
  argTypes: {
    title: { control: "text" },
    textColor: { control: "text" },
  },
};

// 템플릿을 만들어줍니다. 이 템플릿에서는
// Title 컴포넌트가 args를 전달받아 props로 내려줍니다.
const Template = (args) => <Title {...args} />;

// Storybook에서 확인하고 싶은 컴포넌트는 export const로 작성합니다.
// 템플릿을 사용하여 Storybook에 넣어줄 스토리를 하나 만들어주었습니다.
// Template.bins({}); 는 정해진 문법이라고 생각하고 사용하시면 됩니다.
export const RedTitle = Template.bind({});

// 만들어준 스토리의 전달인자를 작성해줍니다.
RedTitle.args = {
  title: "Red Title",
  textColor: "red",
};

export const BlueTitle = Template.bind({});

BlueTitle.args = {
  title: "Blue Title",
  textColor: "blue",
};

export const BrownTitle = Template.bind({});

BrownTitle.args = {
  title: "BrownTitle",
  textColor: "brown",
};

export const StorybookTitle = (args) => {
  return <Title {...args} />;
};
