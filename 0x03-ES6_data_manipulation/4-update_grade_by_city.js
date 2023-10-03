export default function updateStudentGradeByCity(student, city, newGrades) {
  if (!Array.isArray(student)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return student
    .filter((student) => student.location === city)
    .map((student) => {
      const [newGrade] = newGrades.filter((grade) => grade.id === student.id);
      return {
        ...student,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
