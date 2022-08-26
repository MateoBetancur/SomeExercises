/* Make a function to calculate the average of an array in JavaScript */

export default function main(array: number[]): void {
    const allSum = array.reduce((prevVal, currentVal)=> prevVal + currentVal);
    console.log("Sum", allSum);
    console.log("average", allSum / array.length);
}