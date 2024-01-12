const client = require('./client');

const init = async () => {
  await client.lpush('tasks', 1);
  await client.lpush('tasks', 2);
  await client.lpush('tasks', 3);
  await client.lpush('tasks', 4);
  //   const res = await client.lpop('tasks');
  const res = await client.blpop('tasks', 10);
  console.log(res);
};

init();
