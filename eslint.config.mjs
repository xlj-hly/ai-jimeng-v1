import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  // 将 Prettier 作为 ESLint 规则运行, 并将差异报告为单个 ESLint 问题
  eslintPluginPrettierRecommended,
  // 关闭 ESLint 中所有不必要或可能与 Prettier 冲突的规则
  eslintConfigPrettier,
]);

export default eslintConfig;
