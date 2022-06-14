class maths{
    

    letisPrime = (number) => {
        let flag = 0;
        for (i = 2; i < number / 2; i++) {
            if (number % i == 0) {
                flag = 1;
                break;
            }
        }

        if (flag) {
            console.log(`${number} is not prime`);
        } else {
            console.log(`${number} is prime`);
        }
    }
}

module.exports = maths.isPrime;