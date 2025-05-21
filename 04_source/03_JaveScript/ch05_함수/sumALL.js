//매개변수가 없으면 -999 return
//매개변수가 있으면 매개변수들의 합을 return
// test

function sumALL() {
    if (arguments.length === 0) {
        return -999;  // 매개변수가 없을 경우
    } else {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    }
}
