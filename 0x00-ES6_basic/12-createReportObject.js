export default function createReportObject(employeesList) {
  return {
    allEmployee: {
      ...employeesList,
    },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
