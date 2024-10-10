const numbers = Array.from({ length: 100 }, (v, i) => i + 1);

function isPrime(num) {
    if (num <= 1) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
  
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false
    }
    
    return true
  }

function Cab(arr) {
    let temp = []

    let primeNumbers = []

    for (let i = arr.length ; i >= 0; i--) {
        const element = arr[i];
        
        if(isPrime(element) ) {
            primeNumbers.push(element)
        } else if (element % 3 === 0 && element %5 === 0){
            temp.push("FooBar")
        }else if (element %3 === 0) {
            temp.push("Foo")
        } else if (element % 5 === 0) {
            temp.push("Bar")

        } else {
            temp.push(element)
        }
    }

    return temp.join(", ")
}
console.log(Cab(numbers));