// ==============================
//        Level: Easy
//        Segment: 1
// ==============================

// ----- Exercise 1 -----
function greet() {
  console.log("Hello, world!");
}

// ----- Exercise 2 -----
const favoriteNumber = () => {
  console.log("59");
};

// ----- Exercise 3 -----
const magicEightBall = () => {
  let randomNumber = Math.floor(Math.random() * 4);
  let eightBall = "";

  switch (randomNumber) {
    case 0:
      eightBall = "Yes.";
      break;
    case 1:
      eightBall = "No.";
      break;
    case 2:
      eightBall = "Maybe.";
      break;
    case 3:
      eightBall = "Ask again later";
      break;
  }

  console.log(eightBall);
};

// ----- Exercise 4 -----
const getCurrentYear = () => {
  let currentYear = new Date().getFullYear();
  console.log(currentYear);
};

// ----- Exercise 5 -----
const tellJoke = () => {
  let randomNumber = Math.floor(Math.random() * 6);
  let joke = "";
  switch (randomNumber) {
    case 1:
      joke =
        "Hvad sagde den ene skydere til den anden? Du skal ikke være så negativ!";
      break;
    case 2:
      joke =
        "Hvorfor kan man ikke stole på trapper? Fordi de altid er op og ned!";
      break;
    case 3:
      joke = "Hvad kalder man en hund, der kan trylle? En labra-kadabra!";
      break;
    case 4:
      joke =
        "Hvad gør man, når man ser en grøn bil? Man venter på, den bliver rød!";
      break;
    case 5:
      joke =
        "Hvorfor tog spøgelset til skole? For at lære at blive mere åndeligt!";
      break;
  }
  console.log(joke);
};

// ==============================
//        Segment: 2
// ==============================

// ----- Exercise 6 -----
const personalGreeting = (name) => {
  console.log(`Hello, ${name}!`);
};

// ----- Exercise 7 -----
const add = (num1, num2) => {
  sum = num1 + num2;
  console.log(sum);
};

// ----- Exercise 8 -----
const ageInMonths = (age) => {
  months = age * 12;
  console.log(months);
};

// ----- Exercise 9 -----
const celsiusToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(fahrenheit);
};

// ----- Exercise 10 -----
const getFullName = (firstName, lastName) => {
  let fullName = `${firstName} ${lastName}`;
  console.log(fullName);
};

// ==============================
//        Segment: 3
// ==============================

// ----- Exercise 11 -----
const calculateArea = (side1, side2) => {
  let calculatedArea = side1 * side2;
  console.log(calculatedArea);
};

// ----- Exercise 12 -----
const findMax = (value1, value2) => {
  if (value1 > value2) {
    console.log(`${value1} is the larger number.`); // If value1 is larger than value2.
  } else if (value1 === value2) {
    console.log(`${value1} and ${value2} are the same value`); // for the off chance someone would input the same on both values.
  } else {
    console.log(`${value2} is the larger number.`); // If value2 is larger than value1.
  }
};

// ----- Exercise 13 -----
const vowels = ["a", "e", "i", "o", "u", "y"];
const countVowels = (str) => {
  let count = 0;
  for (letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  console.log(count);
};

// ----- Exercise 14 -----
const calculateDiscount = (price, discount) => {
  newPrice = price * (discount / 100);
  console.log(newPrice);
};

// ----- Exercise 15 -----
const reverseString = (str) => {
  console.log(str.split("").reverse().join(""));
};

// ==============================
//        Level: Intermediate
//        Excercise 1-5
// ==============================

// ----- Exercise 1 -----
const isPalindrome = (str) => {
  let re = /[^A-Za-z0-9]/g; // Use a regular expression to match our string.

  str = str.toLowerCase().replace(re, ""); //Take our string, convert it to lower case, replace it with our regular expression.

  let strLength = str.length; // Measure the length of our string

  for (let i = 0; i < strLength / 2; i++) {
    // go through the string rom both sides.
    if (str[i] !== str[strLength - 1 - i]) {
      // if letters (or shapes) do NOT match.
      return false; // return false
    }
  }
  return true; // otherwise return true.
};

// ----- Exercise 2 -----
const fizzBuzz = (num) => {
  let f = "Fizz"; // made variables for fizz
  let b = "Buzz"; // and buzz.

  if (num % 5 === 0 && num % 3 === 0) {
    // Check if divisable by both.
    console.log(f + b);
  } else if (num % 3 === 0) {
    // Check if divisable by 3.
    console.log(f);
  } else if (num % 5 === 0) {
    // Check if divisable by 5.
    console.log(b);
  } else {
    console.log(num);
  }
};

// ----- Exercise 3 -----
const factorial = (num) => {
  let result = num;
  if (num === 0 || num === 1) return 1; // if number is 0 return 1.
  while (num > 1) {
    // Start while loop if input is more than 1.
    num--; // every iteration we deduct 1 from num.
    result *= num; // result is multiplies with the new value in num.
  }
  return result; // return result.
};

// ----- Exercise 4 -----
const findLongestWord = (input) => {
  const words = input.split(" "); // Split the sentence into an array of words
  let longestWord = ""; // Empty string to store the longest word

  for (let word of words) {
    if (word.length > longestWord.length) {
      // Check if the current word is longer
      longestWord = word; // Update longestWord if current word is longer
    }
  }

  return longestWord;
};

// ----- Exercise 5 -----
const calculateAverage = (input) => {
  // Input takes the array.
  const sum = input.reduce((total, current) => total + current, 0); // reduce sums up all numbers in the array. I use "total" as a variable for the accumulated numbers, and "current" for the current iteration number.
  const average = sum / input.length; // sum is divided by the length of the array to get the average.
  return average;
};

// ==============================
//        Excercise 6-10
// ==============================

// ----- Exercise 6 -----
const removeDuplicates = (array) => {
  return [...new Set(array)]; // The Set object in JavaScript only stores unique values.
}; //  I convert the Set back into an array with the spread operator (...), which results in an array of unique values.

// ----- Exercise 7 -----
const capitalizeFirstLetter = (input) => {
  if (!input) return "no input / null"; // check if there's in input.
  else {
    return input[0].toUpperCase() + input.slice(1); // If there is an input, pull the first letter out capitalize it and slice it back in.
  }
};

// ----- Exercise 8 -----
const countOccurrences = (string, char) => {
  let count = 0;
  for (const letter of string) {
    // Iterate over each letter.
    if (letter === char) {
      // if the current letter is the same as the one input in the 'char' param.
      count++; // increase our counter by 1.
    }
  }
  return count; //return count.
};

// ----- Exercise 9 -----
const mergeArrays = (array1, array2) => {
  // Takes 2 arrays and merges them into one.
  let combine = [...new Set([...array1, ...array2])];
  // The way this works is kind of like folders.
  // We take the two arrays into another array and "unpack" it with a spread command each,
  // after which we unpack the new array into a set, and then pack them back into a new array (`combine`)
  // after the set removes the duplicates.
  return combine; // Returns combined arrays with no duplicates thanks to the set.
};

// ----- Exercise 10 -----
const generatePassword = (length, includeSpecialChars) => {
  // Define character sets. I'm thinking i could use this somwhere else so i went ahead and added an "include special characters"-parameter for good measure.
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"; // These will only be included if the user inputs 'yes' as a second parameter.

  // Combine character sets based on the input
  let characters = lowercase + uppercase + numbers;
  if (includeSpecialChars.toLowerCase() === "yes") {
    characters += specialChars; // Add special characters if 'yes'
  }

  // Generate password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex]; // Append a random character
  }

  return password; // Return the generated password
};

// ==============================
//        Excercise 11-14
// ==============================

// ----- Exercise 11 -----
const charFrequency = (string) => {
  const frequency = {}; // establish "frequency" as en empty object.
  for (let char of string) {
    if (frequency[char]) {
      // If the character already exists in the object, increment its count.
      frequency[char]++;
    } else frequency[char] = 1; // Otherwise, initialize it and set it to 1.
  }
  return frequency; // returns each letter and their frequencies.
};

// ----- Exercise 12 -----
const arrayIntersection = (array1, array2) => {
  return array1.filter((element) => array2.includes(element));
  // using the filter method with array2 as template for array1 we can return
  // a new array containing only the elements that exist in both arrays.
};

// ----- Exercise 13 -----
const reverseWords = (str) => {
  console.log(str.split(" ").reverse().join(" "));
  // This is just a modified version of `reverseString` adding spaces
  // inside the quotation marks to split into words instead of letters.
};

// ----- Exercise 14 -----
const findMin = (value1, value2) => {
  if (value1 < value2) {
    console.log(`${value1} is the smaller number.`); // If value1 is smaller than value2.
  } else if (value1 === value2) {
    console.log(`${value1} and ${value2} are the same value.`); // For the case where both values are the same.
  } else {
    console.log(`${value2} is the smaller number.`); // If value2 is smaller than value1.
  }
  // Again, this is a modified version of findMax.
  // comparing for the smaller number instead of the larger one.
};
