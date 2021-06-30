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
        ],
        [
          "@svgr/babel-plugin-add-jsx-attribute",
          {
            "elements": ["Path"],
            "attributes": [
              {
                "name": "fill",
                "value": "currentColor",
                "spread": false,
                "literal": false,
                "position": "end"
              }
            ]
          }
        ]
      ],
    },
  },
}