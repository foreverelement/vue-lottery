export function getRandom(min, max) {
  if (min < max) {
    return (min + Math.floor([max - min] * Math.random()));
  } else {
    return false;
  }
}
