export default function createReportObject(employeesList) {
  const obje = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };

  return obje;
}
