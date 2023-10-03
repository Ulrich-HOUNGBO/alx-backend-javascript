export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (!Array.isArray(newGrades)) {
    return [];
  }
  return students
    .filter((students) => students.location === city)
    .map((students) => {
      const [newGrade] = newGrades.filter((grade) => grade.id === students.id);
      return {
        ...students,
        grade: newGrade ? newGrade.grade : 'N/A',
      };
    });
}
