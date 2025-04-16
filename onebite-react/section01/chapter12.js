// 1. 함수 표현식
function funcA() {
  // console.log("funcA");
}

let varA = funcA;
varA();

// 값으로 넣었을 때는 호이스팅이 되지 않음
let varB = function () {
  // console.log("funcB");
};

varB();

// 2. 화살표 함수
// 빠르고 간결하게 하기 위함
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));