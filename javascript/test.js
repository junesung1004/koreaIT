let 배열 = [6, 3, 2, 10, 1, 120, 150, 110, 7];

//숫자 정렬하고 싶으면 a앞에꺼, b뒤에꺼 비교해서
//음수 나오면 앞에꺼가 작으면 a, b로 정렬
//양수 나오면 뒤에꺼가 작으면 b, a로 정렬
console.log(배열.sort((a, b) => a - b));

//sort로 정렬을 하고 싶다면
// retrun 값이 - 면 a를 앞에두고
// return 값이 + 면 b를 앞에둔다.

// 문자열 정렬 알파벳순서
배열 = ["1qwer", "2qwer", "asdf", "zxcv", "pl"];
console.log(배열.sort());

let 객체배열 = [
  { id: 0, name: "홍길동" },
  { id: 2, name: "유관순" },
  { id: 1, name: "김유신" },
  { id: 5, name: "호잉" },
  { id: 4, name: "아잉" },
  { id: 3, name: "뿌잉" },
];

console.log(객체배열.sort((a, b) => a["id"] - b["id"]));

//해당 지역의 언어순으로 정렬 localeCompare
console.log(객체배열.sort((a, b) => a["name"].localeCompare(b["name"])));

//filter : 내가 원하는 값만 남겨라  새로운 배열에 값을 적용한다.
//id가 2 이상인 객체만 남길때
console.log(
  객체배열.filter((e) => {
    return e["id"] >= 2;
  })
);

//map : 일괄변경 (배열 안에 들어있는 모든 요소를 변경 )
let 달러 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let 원화 = 달러.map((e) => Math.round(e * 1344.6));
console.log(원화);

//forEach : 배열의 각 요소를 분리해주는 배열전용 반복문
// 배열안에 값들을 각 각 하나로 분리해서 정렬해주는 기능때문에
// 길이 계산을 할 필요가 없다.
달러.forEach((e) => {
  console.log(e);
});
