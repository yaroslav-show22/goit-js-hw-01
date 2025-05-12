function getElementWidth(content, padding, border) {
  const contentValue = parseFloat(content);
  const paddingValue = parseFloat(padding);
  const borderValue = parseFloat(border);
  return contentValue + paddingValue * 2 + borderValue * 2;
}
