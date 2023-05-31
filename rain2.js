// Import the 'stdout' property of the 'process' module to access the terminal's width.
const { stdout } = require('process');

// Define the function to generate a random string of letters and numbers.
function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Define the function to output a random string with random colors for the letters.
function outputRandomString() {
  const length = stdout.columns; // Set the line length to the width of the terminal.
  const randomString = generateRandomString(length);
  let coloredString = '';
  for (let i = 0; i < length; i++) {
    const red = Math.floor(Math.random() * 256); // Generate a random value for the red channel between 0 and 255.
    const green = Math.floor(Math.random() * 256); // Generate a random value for the green channel between 0 and 255.
    const blue = Math.floor(Math.random() * 256); // Generate a random value for the blue channel between 0 and 255.
    coloredString += `\x1b[38;2;${red};${green};${blue}m${randomString.charAt(i)}\x1b[0m`; // Wrap each letter in ANSI color codes with a random RGB color.
  }
  console.log(coloredString);
}

// Call the outputRandomString function every 200ms using setInterval.
setInterval(outputRandomString, 2); // Output a new string every 200ms.
