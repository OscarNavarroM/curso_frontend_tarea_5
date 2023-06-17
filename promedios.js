const grades = [6, 8, 9, 2, 5, 10];

function average(grades) {
  const totalSum = sum(grades);
  const avg = totalSum / grades.length;
  return avg.toFixed(1);
}

function sum(numArray) {
  let total = 0;
  for (let i = 0; i < numArray.length; i++) total += numArray[i];
  return total;
}

console.log(average(grades));
