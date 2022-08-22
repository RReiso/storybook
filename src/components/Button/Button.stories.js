import Button from "./Button";
import React from "react";
import Center from "../Center/Center";

export default {
  title: "form/Button",
  component: Button,
  decorators: [(story) => <Center>{story()}</Center>],
  // args set here will be applied to all stories
  // args: {
  //   children: "This  will be applied to all stories",
  // },

  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

Primary.storyName = "Primary button";

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  children: "With Template",
};

// extend args of previous stories
export const PrimaryB = Template.bind({});
PrimaryB.args = {
  ...PrimaryA.args,
  children: "PrimaryB",
};
