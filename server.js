const express = require('express');
const axios = require('axios');
const client = require('./client');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const cachedValue = await client.get('todos');
  if (cachedValue) {
    return res.json(JSON.parse(cachedValue));
  }

  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );
  await client.set('todos', JSON.stringify(data));
  await client.expire('todos', 30);
  return res.json(data);
});

app.listen(9000, () => console.log('Server is running on port 9000'));
