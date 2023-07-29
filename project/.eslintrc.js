module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,  // <- activate “es2020” globals
    browser: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  plugins: [
    "prettier"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        defaultFormatter: 'esbenp.prettier-vscode',
			},
		],
  },
};
