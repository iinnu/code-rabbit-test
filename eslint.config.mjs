import js from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import astroPlugin from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...astroPlugin.configs.recommended,
  ...reactPlugin.configs.flat.recommended,
  ...tsEslint.configs.recommended,
  {
    files: ['src/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
]);
