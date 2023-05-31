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
  const length = Math.floor(Math.random() * 20) + 10; // Generate a random length between 10 and 30.
  const randomString = generateRandomString(length);
  let coloredString = '';
  for (let i = 0; i < length; i++) {
    const color = Math.floor(Math.random() * 256); // Generate a random color code between 0 and 255.
    coloredString += `\x1b[38;2;${color};${color};${color}m${randomString.charAt(i)}\x1b[0m`; // Wrap each letter in ANSI color codes with a random grayscale color.
  }
  console.log(coloredString);
}

// Call the outputRandomString function infinitely using setInterval.
setInterval(outputRandomString, 1000); // Output a new string every second.
