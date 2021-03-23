function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;
    //假設 x 為 38，產生的值就落在 0 - 37 之間
    //此時程式後面再加 1
}

let arr = [] //第一區號碼
let n = 0;   //第二區號碼

function getPowerNum() {
    for (let i = 1; i <= 6; i++) {
        let num = getRandom(38);

        //如果在陣列裡面沒有值都為 -1,所以第一次帶的數都是-1,後面沒有重複的數字都是-1,有重複的數字就是為陣列的數值
        if (arr.indexOf(num) > -1) {
            i--;
            continue;
        } else {
            arr.push(num);
        }
    }

    arr.sort(function (a, b) {
        return a - b;
        // a - b 指的是由小到大


    })

    n = getRandom(8);
    return `第一區號碼為： ${arr.join(",")}，第二區號碼為： ${n}`;


}
alert(getPowerNum());
