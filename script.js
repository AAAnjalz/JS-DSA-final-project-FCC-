const pokemonId = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const spriteContainer = document.getElementById("sprite-container");
const types = document.getElementById("types");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const searchBtn = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

const getPokemon = async () => {
  try {
    const pokemonNameorId = searchInput.value.toLowerCase();
    const res = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameorId}`
    );
    const data = await res.json();

    //setting pokemon name
    pokemonName.textContent = `Name: ${data.name.toUpperCase()}`;
    pokemonId.textContent = `Id:#${data.id}`;
    height.textContent = `Height: ${data.height}`;
    weight.textContent = `Weight:${data.weight}`;
    spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite"></img>`;
    hp.textContent = `HP: ${data.stats[0].base_stat}`;
    attack.textContent = `Attack: ${data.stats[1].base_stat}`;
    defense.textContent = `Defense: ${data.stats[2].base_stat}`;
    specialAttack.textContent = `Special Attack: ${data.stats[2].base_stat}`;
    specialDefense.textContent = `Special Defense: ${data.stats[4].base_stat}`;
    speed.textContent = `Speed: ${data.stats[5].base_stat}`;
    types.textContent = data.types.map((obj) => `${obj.type.name}`);
  } catch (err) {
    reset();
    alert("Pokemon not found");
  }
};

const reset = () => {
  if (spriteContainer) {
    spriteContainer.remove();
  }

  pokemonName.textContent = "";
  pokemonId.textContent = "";
  types.innerHTML = "";
  height.textContent = "";
  weight.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
};

searchBtn.addEventListener("click", () => {
  getPokemon();
});
