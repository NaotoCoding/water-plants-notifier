import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      "node_modules",
      "**/*.js",
      "**/*.d.ts",
      "cdk.out",
      "jest.config.js",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
