function solution(n, arr1, arr2) {
    let num1, num2, s;
    let answer = [];
    
    for (let i = 0; i < n; i++){
        num1 = arr1[i];
        num2 = arr2[i];
        s = '';
        for (let j = 0; j < n; j++){
            s = (num1 % 2 + num2 % 2) ? '#' + s : ' ' + s; //조건이 true면 앞의 값 '#'을 빈환.
            num1 = Math.floor(num1 / 2);
            num2 = Math.floor(num2 / 2);
        }
        answer.push(s);
    }    
    return answer;
}
  // test
console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));