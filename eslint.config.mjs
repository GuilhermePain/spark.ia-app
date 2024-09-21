import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unsafe-function': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    'no-undef': 'off',
  }}
];