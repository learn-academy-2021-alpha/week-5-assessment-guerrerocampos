// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"
describe('when codedMessage is called', () => {
    it ('returns l4ck4d41s1c4l', ()=> {
        let secretCodeWord1 = "lackadaisical"
        let wordCoded = codedMessage(secretCodeWord1)
        expect(wordCoded).toEqual("l4ck4d41s1c4l")
    })
    it ('returns g0bbl3dyg00k', () => {
        let secretCodeWord2 = "gobbledygook"
        let wordCoded2 = codedMessage(secretCodeWord2)
        expect(wordCoded2).toEqual("g0bbl3dyg00k")
    })
})
// // b) Create the function that makes the test pass.
const codedMessage = (strr) => {
    let replacements = ['4', '3', '1', 0]
    return strr.split('').map(value => {
      return (value === 'a') ? replacements[0] : 
             (value === 'e') ? replacements[1] :
             (value === 'i') ? replacements[2] :
             (value === 'o') ? replacements[3] : value
    }).join('')
  }
  
// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"
test ('when containsLet is called, you should get an array as a return containg all the words that contain the letter a', () => {
    let arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
    let newArray = containsLet(arrayOfWords)
    expect(newArray).toEqual(["Apple", "Banana", "Peach"])
})
// b) Create the function that makes the test pass.
const containsLet = (array) => array.filter(value => value.toLowerCase().includes('a'))
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.
var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
describe ('when handReader is called', () => {
    it('returns a boolean of true', () => {
        let hand1 = [5, 5, 5, 3, 3]
        let handResult = handReader(hand1)
        expect(handResult).toEqual(true)
    })
    it('returns a boolean of false', () => {
        let hand2 = [5, 5, 3, 3, 4]
        let handResult = handReader(hand2)
        expect(handResult).toEqual(false)
    })
    it('returns a boolean of false', () => {
        let hand3 = [5, 5, 5, 5, 4]
        let handResult = handReader(hand3)
        expect(handResult).toEqual(false)
    })
})
// b) Create the function that makes the test pass.
// need function to takin in a n array
const handReader = (array) => {
    // need it to slice the array
    let hand = array.slice();
    // iterate throught the array
    for(let i = 0; i < array.length; ){
        // compare card to the previous one ot look for a match
       let cards = hand.splice(i, 1)[0];
       if(hand.includes(cards)){
          hand.splice(hand.indexOf(cards), 1);
          if(hand.includes(cards)){
             return true;
          }
       }else{
          i++;
       }
    };
    return false;
 };
// can't get it to read the second array right?