// src/componentes/Atomos/Button.stories.jsx

import Button from "./Button";
import "./Button.css";

export default {
  title: "components/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "tertiary",
};