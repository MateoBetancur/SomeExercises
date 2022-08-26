/* 
Statement: Write a program that displays on the console the numbers from 1 to n 
(both included and with a line break between each print), substituting the following:
    - Multiples of 3 for the word "fizz".
    - Multiples of 5 for the word "buzz".
    - Multiples of 3 and 5 at the same time for the word "fizzbuzz".
    - If i isn't a multiple of 3 or 5 prints i.
 */


export default function main(n: number): void {
    for (let i = 1; i <= n; i++) {
        const isMultipleOfThree = i % 3 == 0;
        const isMultipleOfFive = i % 5 == 0;

        if (isMultipleOfThree && isMultipleOfFive) {
            console.log('FizzBuzz');
        } else if (isMultipleOfThree) {
            console.log('Fizz');
        } else if (isMultipleOfFive) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }

}