//Prime Number with while
let number = 1000000007;
let isPrime = true;
let i = 2;
while (i < parseInt(number  ** 0.5) + 1) {
    if (n % i == 0) {
        isPrime = false;
        break;
    }
    i++;
}
console.log(number , isPrime);

// 1000000007 true




//Prime Number with for
let n = 7;
let sum = 0;
for (let index = 2; index < n; index++) {
    if (n % index == 0) {
        sum++
    }
}
if (sum == 2) {
    console.log(`${n} is Prime number !`);
} else {
    console.log(`${n}  is not Prime number !!!!!`);
}

// 7  is not Prime number !!!!!




//Prime Number with functions
function isPrime(n) {
    let isPrime = true;
    let i = 2;
    while (i < parseInt(n ** 0.5)) {
        if (n % i == 0) {
            isPrime = false;
            break
        }

        i++;
    }
    return isPrime;
}
let a = 97;
console.log(a, isPrime(a));

//97 true
