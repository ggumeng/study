// quiz 1-1
const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max);

// quiz 1-2
const a = true;

if (typeof a === "number") {
  console.log("숫자");
} else if (typeof a === "string") {
  console.log("문자열");
} else if (typeof a === "boolean") {
  console.log("불리언");
}

// quiz 1-3
let temperature = 10;

if (temperature >= 20) {
  console.log("더움");
} else if (temperature >= 10) {
  console.log("적당");
} else if (temperature >= 0) {
  console.log("추움.");
} else {
  console.log("매우 추움");
}