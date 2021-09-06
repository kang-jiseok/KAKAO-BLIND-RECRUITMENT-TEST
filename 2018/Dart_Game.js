function solution(dartResult) {
    let answer = [];
    // "1S2D*3T" -> ["1S","2D*","3T"]
    const dartSet = dartResult.match(/\d{1,2}[SDT][*#]?/g); 
    
    // 다트게임의 기회는 3번
    for(let i = 0; i < 3; i++) {
    	// 3번의 계산에서 토큰화 작업
        let num = dartSet[i].match(/\d{1,2}/g);
        const bonus = dartSet[i].match(/[SDT]/g);
        const option = dartSet[i].match(/[*#]/g);
        
        // 'S','D','T'는 string, bonus는 object라서 일치 연산자(===) 사용X
        if(bonus == 'S') {
            num = parseInt(num);
        } else if (bonus == 'D') {
            num = num * num;
        } else if (bonus == 'T') {
            num = num * num * num;
        }
        
        if(option == '*') {
            num = num * 2;
            if(i != 0) {
            	// 숫자가 하나 이상이면 그 전의 숫자도 2배
                answer[i-1] = answer[i-1] * 2;
            }
        } else if(option == '#') {
            num = num * (-1);
        }
        answer.push(num);
    }
    
    return answer.reduce((acc, curr) => acc + curr);
}


console.log(solution('1S2D*3T'));
console.log(solution('1D2S#10S'));
console.log(solution('1D2S0T'));
console.log(solution('1S*2T*3S'));
console.log(solution('1D#2S*3S'));
console.log(solution('1T2D3D#'));
console.log(solution('1D2S3T*'));