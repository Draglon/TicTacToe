module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb/base",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "babel/no-invalid-this": 1,
    "no-undef": 0,
    "react/prop-types": 0,
    "no-case-declarations": 0,
    "react/no-did-update-set-state": 0,
    "class-methods-use-this": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/jsx-filename-extension": 0,
    "import/no-unresolved": 0,
  }
};
