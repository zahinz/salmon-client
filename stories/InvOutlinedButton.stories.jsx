import React from "react";
import InvOutlinedButton from "../components/reusable/InvOutlinedButton";

export default {
  title: "Components/Buttons/InvOutlinedButton",
  component: <InvOutlinedButton />,

  argTypes: {
    children: {
      description: "Children components",
      table: {
        type: { summary: "React node", required: true },
        defaultValue: { summary: "" },
      },
    },
    variant: {
      control: "select",
      options: ["standard", "small", "large"],
      description: "Determine the button size based on the design guideline.",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "standard" },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "Set the button in fullwidth to the parent component",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "HTML disabled button attribute",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    isLoading: {
      control: "boolean",
      description: "Loading state to display progress spinner",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      type: { name: "string", required: false },
      description: "Additional tailwind classes",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => <InvOutlinedButton {...args} />;

export const Standard = Template.bind({});

Standard.args = {
  children: "Standard button",
};

export const Small = Template.bind({});

Small.args = {
  children: "Small button",
  variant: "small",
};

export const Large = Template.bind({});

Large.args = {
  children: "Large button",
  variant: "large",
};
