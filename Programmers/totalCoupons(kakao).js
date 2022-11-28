function totalCoupons(id_list, k) {
    // 입력값(id_list): 물품을 구매한 고객들의 ID가 문자열 형태로 담긴 배열
    // 입력값(k): 고객 한 명당 받을 수 있는 최대 쿠폰 수

    // 1. 각 고객당 받은 쿠폰의 갯수의 정보를 담은 객체를 생성한다.
    let customersCoupons = {};
    
    // 2. 구매한 일자에 따라 각 고객의 이름별로 구성된 2차원 배열을 만든다.
    let customers = []; 
    for(let onedayList of id_list) { // onedayList -> "JAY", "JAY ELLE JAY MAY"
        let onedayListArr = onedayList.split(' ');
        // 2-1. 하루에 2번 이상 구매한 고객은 제외한다.
        let newOnedayListArr = onedayListArr.filter((ele, idx) => {
            return onedayListArr.indexOf(ele) === idx;
        });
        customers.push(newOnedayListArr);
    }
    
    // 3. 고객 정보를 순회하면서 하루에 어떤 고객이 몇 장씩 가져갔는지 파악한다.
    for(let onedayCustomers of customers) {
        for(let each of onedayCustomers) {
            if(!customersCoupons[each]) {
                customersCoupons[each] = 1;
            } else {
                customersCoupons[each]++;
            }

            // 3-1. 가져간 총 갯수가 k보다 많은 경우, 하나씩 빼서 k보다 크지 않게 한다.. 
            if(customersCoupons[each] > k) {
                customersCoupons[each]--;
            } 
        }
    }

    // 4. 1에서 생성한 객체의 프로퍼티 값(고객들이 수령한 쿠폰 갯수)을 모두 더한 값을 리턴한다.
    let result = 0;
    for (let customer in customersCoupons) {
        result += customersCoupons[customer];
    }

    return result;
}

// 문제설명
// XX 페이를 이용해서 물품을 구매한 고객들에게 10% 할인 쿠폰을 지급하려 합니다.
// 쿠폰을 지급하는 방법은 다음과 같습니다.
  // - 물품을 구매한 고객은 하루에 최대 1장씩 할인 쿠폰을 받습니다.
  // - 고객 한 명당 최대 k장까지 할인 쿠폰을 받을 수 있습니다.
// 예를 들어 고객 한 명당 k = 2장까지 할인 쿠폰을 받을 수 있고, A 고객이 3일 동안 매일 물건을 구매했다면, 이 고객은 할인 쿠폰을 2장 받습니다.
// 각 날짜별로 XX 페이를 이용해 물품을 구매한 고객들의 ID가 문자열 형태로 담긴 배열 id_list, 고객 한 명당 받을 수 있는 최대 쿠폰 수 k가 매개변수로 주어질 때,
// 고객들에게 지급된 쿠폰은 모두 몇 장인지 return 하도록 totalCoupons 함수를 완성해주세요.

// 제한사항
  // - id_list의 길이는 1 이상 1,000 이하입니다.
    // - id_list의 원소는 각 날짜별로 물품을 구매한 고객 ID가 담긴 문자열입니다.
    // - 각 문자열의 길이는 1 이상 10,000 이하입니다.
    // - 문자열에서 고객 ID는 공백으로 구분되어 있습니다.
    // - 고객 ID의 길이는 1 이상 10 이하이며, 알파벳 대문자로만 되어있습니다.
    // - 하루에 물품을 여러 번 구매한 고객이 있을 수 있습니다.
  // - k는 1 이상 id_list의 길이 이하인 자연수입니다.

// 입출력 예
// 예시1) id_list: ["A B C D", "A D", "A B D", "B D"], k: 2 // result: 7
// 예시2) id_list: ["JAY", "JAY ELLE JAY MAY", "MAY ELLE MAY", "ELLE MAY", "ELLE ELLE ELLE", "MAY"], k: 3 // result: 8

// 입출력 예시
// 예시1)
  // 날짜   | 쿠폰을 받은 고객
  // 1일차 | A, B, C, D
  // 2일차 | A, D
  // 3일차 | B
  // 4일차 | 없음
    // - A 고객은 1일차, 2일차에 쿠폰을 받고, 3일차에는 쿠폰을 받지 않습니다.
    // - B 고객은 1일차, 3일차에 쿠폰을 받고, 4일차에는 쿠폰을 받지 않습니다.
    // - C 고객의 경우, 1일차에만 쿠폰을 받습니다.
    // - D 고객은 1일차, 2일차에 쿠폰을 받고, 3일차, 4일차에는 쿠폰을 받지 않습니다.
  // 따라서 쿠폰이 총 7장 지급됐습니다.

// 예시2)
  // 날짜   | 쿠폰을 받은 고객
  // 1일차 | JAY
  // 2일차 | JAY, ELLE, MAY
  // 3일차 | MAY, ELLE
  // 4일차 | ELLE, MAY
  // 5일차 | 없음
  // 6일차 | 없음
    // - JAY 고객은 1일차, 2일차에 쿠폰을 받고, 하루 최대 1장씩 쿠폰을 받을 수 있기 때문에 2일차에는 1회만 지급됩니다.
    // - ELLE 고객은 2일차, 3일차, 4일차에 쿠폰을 받고, 고객당 최대 3장까지 지급이 가능하기 때문에 5일차부터는 지급되지 않습니다.
    // - MAY 고객은 2일차, 3일차, 4일차에 쿠폰을 받고, 하루 최대 1장씩 쿠폰을 받을 수 있기 때문에 3일차에는 1회만 지급되며, 고객당 최대 3장까지 지급이 가능하기 때문에 5일차부터는 지급되지 않습니다.
