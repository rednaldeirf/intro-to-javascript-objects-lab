/*
  ✨ Code Review & Refactor Suggestions ✨
  Excellent job working with object manipulation and iteration!
  These refinements improve readability, efficiency, and consistency. 🏆
*/

// ✅ Exercise 3: Add a difficulty level
game.difficulty = "Med";
console.log("Exercise 3:", game);

// ✅ Exercise 4: Select and add a starter Pokémon to the party
const starterPokemon = pokemon.find((p) => p.starter);
if (starterPokemon) {
  game.party.push(starterPokemon);
}
console.log("Exercise 4:", game.party);

// ✅ Exercise 5: Choose three more Pokémon based on type
const typesToAdd = ["water", "fire", "fairy"];
typesToAdd.forEach((type) => {
  const foundPokemon = pokemon.find((p) => p.type.toLowerCase() === type);
  if (foundPokemon) game.party.push(foundPokemon);
});
console.log("Exercise 5:", game.party);

// ✅ Exercise 6: Mark gyms with difficulty < 3 as completed
game.gyms.forEach((gym) => {
  if (gym.difficulty < 3) gym.completed = true;
});
console.log("Exercise 6:", game.gyms);

// ✅ Exercise 7: Evolve the starter Pokémon
const evolutions = {
  Bulbasaur: "Ivysaur",
  Charmander: "Charmeleon",
  Squirtle: "Wartortle",
  Pikachu: "Raichu",
};

const starterIndex = game.party.findIndex((p) => evolutions[p.name]);
if (starterIndex !== -1) {
  const evolvedPokemon = pokemon.find(
    (p) => p.name === evolutions[game.party[starterIndex].name]
  );
  if (evolvedPokemon) {
    game.party.splice(starterIndex, 1, evolvedPokemon);
  }
}
console.log("Exercise 7:", game.party);

// ✅ Exercise 8: Print the name of each Pokémon in the party
game.party.forEach((p) => console.log("Exercise 8:", p.name));

// ✅ Exercise 9: Print all starter Pokémon from the data
console.log("Exercise 9: Starter Pokémon");
pokemon.filter((p) => p.starter).forEach((p) => console.log(p.name));

// ✅ Exercise 10: Add a catchPokemon method
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
};
game.catchPokemon(pokemon[149]);
game.catchPokemon(pokemon[150]);
console.log("Exercise 10:", game.party);

// ✅ Exercise 11: Update catchPokemon to reduce pokeball count
game.catchPokemon = function (pokemonObj) {
  this.party.push(pokemonObj);
  const pokeball = this.items.find((item) => item.name === "pokeball");
  if (pokeball) pokeball.quantity--;
};
game.catchPokemon(pokemon[98]);
console.log("Exercise 11:", game.items);

// ✅ Exercise 12: Complete gyms with difficulty < 6
game.gyms.forEach((gym) => {
  if (gym.difficulty < 6) gym.completed = true;
});
console.log("Exercise 12:", game.gyms);

// ✅ Exercise 13: Add a gymStatus method to tally completed/incomplete gyms
game.gymStatus = function () {
  const gymTally = { completed: 0, incomplete: 0 };
  this.gyms.forEach((gym) =>
    gym.completed ? gymTally.completed++ : gymTally.incomplete++
  );
  console.log("Exercise 13:", gymTally);
};
game.gymStatus();

// ✅ Exercise 14: Add a partyCount method
game.partyCount = function () {
  return this.party.length;
};
console.log(
  `Exercise 14: You have ${game.partyCount()} Pokémon in your party.`
);

// ✅ Exercise 15: Complete gyms with difficulty < 8
game.gyms.forEach((gym) => {
  if (gym.difficulty < 8) gym.completed = true;
});
console.log("Exercise 15:", game.gyms);

// ✅ Exercise 16: Log the final game state
console.log("Exercise 16:", game);
