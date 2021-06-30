module.exports = {
  jsx: {
    babelConfig: {
      plugins: [
        [
          "@svgr/babel-plugin-replace-jsx-attribute-value",
          {
            "values": [
              { "value": "1em", "newValue": 24 },
            ]
          }
        ]
      ],
    },
  },
}