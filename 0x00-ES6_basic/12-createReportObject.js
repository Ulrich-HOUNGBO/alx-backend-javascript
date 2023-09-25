export default function createReportObject(employeesList) {
  return {
    allEmployee: {
      ...employeesList,
    },
    getNumberOfDepartments(employeeList) {
      return Object.keys(employeeList).length;
    },
  };
}
