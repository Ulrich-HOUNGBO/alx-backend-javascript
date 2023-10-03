export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return array.reduce((accumulator, each) => accumulator + each.id, 0);
}
