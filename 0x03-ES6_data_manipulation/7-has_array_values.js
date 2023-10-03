export default function hasValuesFromArray(array, set) {
  return array.every((element) => set.has(element));
}
