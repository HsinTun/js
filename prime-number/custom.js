
//dividend被除數的英文,divisor除數的英文
for (let dividend = 2; dividend <= 100; dividend++) {//從2開始,因為大家都可以整除1

    let isPrime = true;//每一次都先為true

    for (let divisor = 2; divisor < dividend; divisor++) {//先確認一下被除數有沒有大於除數,有再往裡面 if 判斷餘數是否為 0
        if (dividend % divisor == 0) {
            isPrime = false;
            //ex 2<3 3/2=1..1(被能被整除為true)   往下跳去else
            //ex  2<4  4/2=2...0(能被整除所以為false)往下跳去if
            //依此類推
        }
    }
    if (isPrime == false) {
        console.log(`${dividend}不是質數`);

    }
    else {
        console.log(`${dividend} 質數`);
    }
}
