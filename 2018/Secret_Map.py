def solution(n, arr1, arr2):
    answer = []
    # zip함수를 이용해 뱌열arr1과 arr2를 병렬처리 해준다.
    for i, j in zip(arr1, arr2):
        # 배열의 값을 비트연산자 or을 이용해 구하고, bin()을 사용해 10진수를 2진수로 변경하고, [2:]를 통해 2진수(0b1111) 표현인 0b를 제거해준다.
        # a[(9 | 30), (20 | 1), (28 | 21), (18, 17), (11, 28)]
        a = str(bin(i | j))[2:]
        # rjuset함수는 문자열을 오른쪽으로 정렬해서 보기 좋게 출력할 때 사용한다.
        a = a.rjust(n, '0')  # 문자열.rjust(전체 자리 숫자, 공백이 있을 경우 공백을 채울 텍스트)
        # replace함수는 문자열을 변경할때 사용한다.
        a = a.replace('1', '#')  # 변수.replace(기존문자, 변경할 문자)
        a = a.replace('0', ' ')
        # a의 값을 answer에 append해준다.
        answer.append(a)
    return answer  # answer값을 return해준다.


print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
print(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]))
