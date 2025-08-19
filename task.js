// 

// ...nums দিয়ে তুমি সব argument array হিসেবে নিচ্ছো।
// for loop দিয়ে সব element যোগ করছো।
// console.log(nums) দিয়ে পুরো array দেখাচ্ছে।
// Return value = total sum।
function sumAll(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(nums);
  return sum;

}
console.log(sumAll(10, 20, 30, 40, 50, 60));