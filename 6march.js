//1. Reverse String
// Define the input string
let input = "Hii, PW Skills";

// Function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to reverse the string after a delay
function reverseAfterDelay(str) {
  setTimeout(function() {
    let reversed = reverseString(str);
    console.log("Reversed string:", reversed);
  }, 2000); // Delay of 2 seconds (2000 milliseconds)
}

// Call the function with the input string
reverseAfterDelay(input);


//2.Random Number Generator with Delay and Progress Indication:
// Variable to store the delay time in milliseconds
let delay = 3000; // 3 seconds

// Function to generate a random number after a delay
function generateRandomNumberAfterDelay(delay) {
  // Display countdown message every second until random number is generated
  let countdown = setInterval(function() {
    if (delay > 0) {
      console.log("Time remaining:", delay / 1000, "seconds");
      delay -= 1000;
    } else {
      clearInterval(countdown); // Stop the countdown when delay reaches 0
      let randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
      console.log("Random number generated:", randomNumber);
    }
  }, 1000); // Execute every second (1000 milliseconds)

  // Set timeout to generate random number after specified delay
  setTimeout(function() {
    clearInterval(countdown); // Stop the countdown
    let randomNumber = Math.floor(Math.random() * 100); // Generate random number between 0 and 99
    console.log("Random number generated:", randomNumber);
  }, delay);
}

// Call the function with the specified delay
generateRandomNumberAfterDelay(delay);


//3.Build a feature for Store's Inventory.
// Object containing items and their prices in USD
const pricesInUSD = {
    "item1": 10,
    "item2": 20,
    "item3": 30
  };
  
  // Function to convert prices from USD to INR
  function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
  }
  
  // Convert prices to INR using map function
  const pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
  );
  
  // Output the converted prices
  console.log("Prices in INR:", pricesInINR);

  

  //4.Filtering and Capitalizing: Books Published After 2010 with Author Names.
  // Sample list of books with authors and publication years
const books = [
    { title: "Book 1", author: "author 1", year: 2005 },
    { title: "Book 2", author: "author 2", year: 2012 },
    { title: "Book 3", author: "author 3", year: 2009 },
    { title: "Book 4", author: "author 4", year: 2015 }
  ];
  
  // Function to filter out books published before 2010 and capitalize author names
  function filterAndCapitalize(books) {
    return books.filter(book => book.year >= 2010) // Filter out books published before 2010
                .map(book => ({                         // Capitalize author names
                  ...book,
                  author: book.author.toUpperCase()
                }));
  }
  
  // Call the function with the list of books
  const filteredBooks = filterAndCapitalize(books);
  
  // Output the filtered and capitalized books
  console.log(filteredBooks);
  

  //5. URL Validation
  // Function to validate URL using regex
function validateURL(url) {
    // Define the regex pattern for valid URLs
    const regex = /^(http|https):\/\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
    
    // Test if the input matches the regex pattern
    if (regex.test(url)) {
      console.log("The URL is valid.");
    } else {
      console.log("The URL is not valid.");
    }
  }
  
  // Test cases
  validateURL("http://example.com"); // Valid URL
  validateURL("https://www.example.com"); // Valid URL
  validateURL("ftp://example.com"); // Not valid URL
  

  //6. LinkedIn Profile URL Validator.
  // Function to validate LinkedIn profile URL using regex
function validateLinkedInProfileURL(url) {
    // Define the regex pattern for valid LinkedIn profile URLs
    const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    
    // Test if the input matches the regex pattern
    if (regex.test(url)) {
      console.log("The LinkedIn profile URL is valid.");
    } else {
      console.log("The LinkedIn profile URL is not valid.");
    }
  }
  
  // Test cases
  validateLinkedInProfileURL("https://www.linkedin.com/in/john_doe123"); // Valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/sara-smith-123"); // Valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/mark-johnson"); // Valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/user1234"); // Valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/123user"); // Valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/"); // Not valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/invalid"); // Not valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/in/!@#"); // Not valid URL
  validateLinkedInProfileURL("https://www.linkedin.com/profiles/123"); // Not valid URL
  