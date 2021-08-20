def solution(n, arr1, arr2):
    answer = []
    for i, j in zip(arr1, arr2):
        a = str(bin(i | j))[2:]
        a = '0' * (n - len(a)) + a
        a = a.replace('1', '#')
        a = a.replace('0', ' ')
        answer.append(a)
    return answer


print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
