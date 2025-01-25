const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Something went wrong!');
    });
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

async function someAsyncOperation() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new Error('Simulated error');
  }
  return { message: 'Success!' };
}