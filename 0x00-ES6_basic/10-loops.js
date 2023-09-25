export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    array.push(`${idx}${appendString}`);
  }

  return array;
}
