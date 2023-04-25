module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:i18next/recommended", "plugin:storybook/recommended"],
	"overrides": [{
		files: ["**/src/**/*.test.{ts,tsx}"],
		rules: {
			"i18next/no-literal-string": "off"
		}
	}],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": ["react", "@typescript-eslint", "i18next"],
	"ignorePatterns": ["scripts", "jsonServer"],
	"rules": {
		"react/prop-types": [0],
		"i18next/no-literal-string": ["error", {
			markupOnly: true,
			ignoreAttribute: ["data-testid", "to"]
		}],
		"object-curly-spacing": ["error", "always"],
		"react/button-has-type": ["error", {
			"button": true,
			"submit": true,
			"reset": true
		}],
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"react/react-in-jsx-scope": "off",
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "windows"],
		"quotes": ["error", "double"],
		"semi": ["error", "never"],
	}
}
