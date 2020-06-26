const marked = require("marked");

module.exports = (source) => {
  const html = marked(source);
  // return `module.exports = ${JSON.stringify(html)}`;
  // return `export default ${JSON.stringify(html)}`;
  return html
};