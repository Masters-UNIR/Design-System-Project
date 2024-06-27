/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",

  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [svgr()],
    });
  },
};
export default config;
