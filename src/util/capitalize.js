/* capitalizes strings */
export default function capitalize(word) {
  return word.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}
