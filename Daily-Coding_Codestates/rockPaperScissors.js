function rockPaperScissors(num) {
    // TODO: 여기에 코드를 작성합니다.
    // num은 3 아니면 다른 숫자
    num = num || 3;

    // 가위바위보 배열
    let rps = ['rock', 'paper', 'scissors']

    // 결과를 반환해줄 빈 배열
    let result = [[rock,rock,rock]];

    // 재귀
    // 인자 - 숫자, 가위바위보, 가위바위보 배열
    let recursive = (number, rps, rpsArr) => {

        // 탈출 조건 num이 0일때 
        if (number === 0) {
            // 결과에 가위바위보 배열을 담아준다 / 리턴 꼭 해주기 !
            return result.push(rpsArr)
        }
        // 탈출조건 아니라면 반복문으로 재귀함수 호출하기
        for (let i = 0; i < rps.length; i++) {
            // result.push(rps, rpsArr[i])
            // console.log(result)
            recursive(number - 1, rps, rpsArr.concat(rps[i])) // [rock, rock, rock]
        }
    }

    // result >>> []
    recursive(num, rps, [])
    return result;
};
