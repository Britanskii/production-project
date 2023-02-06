module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:i18next/recommended"
	],
	"overrides": [],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint",
		"i18next",
	],
	"rules": {
		"i18next/no-literal-string": ["error", { markupOnly: true }],
		"object-curly-spacing": ["error", "always"],
		"react/button-has-type": ["error", {
			"button": true,
			"submit": true,
			"reset": true
		}],
		"@typescript-eslint/no-non-null-assertion": "off",
		"react/react-in-jsx-scope": "off",
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		]
	}

}
