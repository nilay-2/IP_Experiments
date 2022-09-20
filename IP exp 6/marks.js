const marks = document.querySelectorAll(".marks");
const sum = document.querySelector(".total");
const grade = document.querySelector(".grade");
const res = document.querySelector(".res");
const values = [];

res.addEventListener("click", function () {
  // calculating total
  marks.forEach(function (val, i, arr) {
    values.push(+val.value);
  });
  console.log(values);
  const total = values.reduce((curr, next, arr) => curr + next);
  sum.value = total;
  const percent = (total / 600) * 100;
  console.log(percent);
  // Determining grade
  if (percent >= 80) grade.value = "A";
  if (percent > 60 && percent < 80) grade.value = "B";
  if (percent > 50 && percent < 60) grade.value = "C";
  if (percent <= 50) grade.value = "D";
  // clear input
  marks.forEach(function (val, i, arr) {
    val.value = "";
  });
});
