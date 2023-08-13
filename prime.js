function isPrime(n) {
  for (let i = 2; i < n; i++) {
    //   console.log(n / i);
    if (n % i == 0) {
      return "Not a prime number";
    }
  }
  return "It is Prime Number";
}
let result = isPrime(481);
console.log(result);