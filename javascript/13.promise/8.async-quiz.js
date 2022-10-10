function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //   return Promise.resolve(`🪴 => 🐓`);
}

// fetchEgg('🐔').then((egg) => console.log(egg));

async function eggGetter() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    chicken = '🐔';
  }
  const fetchedEgg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(fetchedEgg);
  return friedEgg;
}

eggGetter() //
  .then((chain) => console.log(chain));

// getChicken()
//   .catch(() => '🐔')
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);
