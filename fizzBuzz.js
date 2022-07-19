let i;

function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    // Number divisible by 3 and 5 will
    // be divisible by 15, log FizzBuzz
    // in place of the number
    if (i % 15 == 0) console.log('FizzBuzz');

    // For number divisible by 3, log Fizz
    // in place of the number
    else if (i % 3 == 0) console.log('Fizz');

    // For number divisible by 5, log Buzz
    // in place of the number
    else if (i % 5 == 0) console.log('Buzz');

    // log the number
    else console.log(i);
  }
}

fizzBuzz();