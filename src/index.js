const randomPokemon = async function() {
  const fetch = require('node-fetch')
  const res = await fetch('https://serenachan.glitch.me/api/pokemon/random')
  const data = await res.json()
  return data;
}

const getPokemon = async function(number){
  if(isNaN(number) === false){
    throw new SyntaxError('The function parameter must be a dex number of a Pokemon')
  } else if(!number){
    throw new SyntaxError('The function parameter must be a dex number of a Pokemon')
  } else if(number <= 0){
    throw new SyntaxError('The function parameter must be a dex number of a Pokemon, Minimum 1')
  }
  const fetch = require('node-fetch')
  const res = await fetch('https://serenachan.glitch.me/api/pokemon')
  const data = await res.json()
  return data[number];
}

const allPokemon = async function(){
  const fetch = require('node-fetch')
  const res = await fetch('https://serenachan.glitch.me/api/pokemon')
  const data = await res.json()
  return data;
}

module.exports = {
  allPokemon,
  getPokemon,
  randomPokemon
}