/* 
Statement: Write a function that receives two words (String) and answers
true or false (Boolean) depending on whether or not they are anagrams.

    - An Anagram consists of forming a word by rearranging 
    ALL the letters of another initial word.
    - It is NOT necessary to check that both words exist.
    - Two exactly the same words are not an anagram.
*/


export default function main(wordOne: string, wordTwo: string): boolean {
    if (wordOne === wordTwo) {
        return false;
    }
    const charactersOne = wordOne.toLocaleLowerCase().split(' ').join('').split('').sort();
    const charactersTwo = wordTwo.toLocaleLowerCase().split(' ').join('').split('').sort();
    console.log('Word one', charactersOne);
    console.log('Word two', charactersTwo);

    let isAnagram = true;

    charactersOne.forEach((character, i) => {
        if (character !== charactersTwo[i]) {
            isAnagram = false;
        }
    })
    return isAnagram;


}