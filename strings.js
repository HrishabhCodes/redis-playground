const client = require('./client');

async function init() {
  const result = await client.get('user:3');

  //   await client.set('user:6', 'Pooja');
  //   const result2 = await client.get('user:6');
  //   console.log(result2);

  //   await client.expire('user:3', 10);
  console.log(result);
}

init();
