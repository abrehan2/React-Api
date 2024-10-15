export function Capitalize(word) {
  const splitIt = word
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return splitIt;
}
