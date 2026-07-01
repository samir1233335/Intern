let employee = {
  id: 1,
  name: "Deep",
  department: "IT",
  salary: 50000
};

console.log("Original object:", employee);

employee.address = "Kathmandu";
console.log("After adding address:", employee);

employee.salary = 60000;
console.log("After updating salary:", employee);

delete employee.department;
console.log("After deleting department:", employee);