import { addDecorator } from "@storybook/react";
import React from "react";
import Margin from "../src/components/Margin/Margin";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

// addDecorator((story) => <Margin>{story()}</Margin>);
export const decorators = [
  (Story) => (
    <Margin>
      <Story />
    </Margin>
  ),
];
