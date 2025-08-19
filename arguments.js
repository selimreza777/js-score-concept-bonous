function add(num1, num2) {
  console.log(num1, num2);
  console.log(arguments[3]);
}
// [Arguments] { '0': 12, '1': 34, '2': 45, '3': 64, '4': 73, '5': 88 }  //array like object array er moto dekha jai kintu array na
add(12, 34, 45, 64, 73, 88);