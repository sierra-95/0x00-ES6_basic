export default function createEmployeesObject(departmentName, employees) {
  const obje = { [`${departmentName}`]: employees };
  return obje;
}
