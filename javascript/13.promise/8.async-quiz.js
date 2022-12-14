function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!'));
  //   return Promise.resolve(`πͺ΄ => π`);
}

// fetchEgg('π').then((egg) => console.log(egg));

async function eggGetter() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    chicken = 'π';
  }
  const fetchedEgg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(fetchedEgg);
  return friedEgg;
}

eggGetter() //
  .then((chain) => console.log(chain));

// getChicken()
//   .catch(() => 'π')
//   .then(fetchEgg)
//   .then(fryEgg)
//   .then(console.log);
