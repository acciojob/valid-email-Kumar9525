function validEmail(str) {
  // Regular expression to match the email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(str);
}

// Test cases
console.log(validEmail('abc@example.com')); // returns true
console.log(validEmail('xyz@abc.com.in')); // returns true
console.log(validEmail('john.doe@com.')); // returns false
console.log(validEmail('@example.com')); // returns false
console.log(validEmail('')); // returns false
