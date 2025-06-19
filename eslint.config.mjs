import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import spellcheck from "eslint-plugin-spellcheck";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      spellcheck: spellcheck,
    },
    rules: {
      // Spell check rules
      "spellcheck/spell-checker": [
        "warn",
        {
          comments: true,
          strings: true,
          identifiers: true,
          lang: "en_US",
          skipWords: [
            "ReguBot",
            "Regu",
            "regubot",
            "regu",
            "nextjs",
            "tailwindcss",
            "eslint",
            "typescript",
            "turbopack",
            "Chatbot",
            "chatbot",
            "svg",
            "2xl",
            "semibold",
            "evenodd",
            "latin",
            "antialiased",
            "Readonly",
            "geist",
          ],
          skipIfMatch: [
            "http://[^s]*",
            "https://[^s]*",
            "^[-\\w]+/[-\\w\\.]+$", // For MIME Types
          ],
          minLength: 3,
        },
      ],
      // React rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      // General rules
      "no-console": "warn",
      "no-debugger": "error",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
];

export default eslintConfig;
