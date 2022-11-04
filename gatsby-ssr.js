const React = require("react")

// Adds a class name to the body element
exports.onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: "bg-gray-200 dark:bg-gray-900",
  })
}
