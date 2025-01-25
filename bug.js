const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling missing here! 
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  // For example, fetching data from a database or an external API
  await new Promise(resolve => setTimeout(resolve, 1000));
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Simulated error');
  }
  return { message: 'Success!' };
}