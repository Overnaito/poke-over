const randomPokemon = async function() {
  const fetch = require('node-fetch')
  const res = await fetch('https://poke-over.glitch.me/api/pokemon/random')
  const data = await res.json()
  return data;
}

const getPokemon = async function(number){
  if(!number){
    throw new SyntaxError('You must put a number as the function parameter, it must be a dex number of a Pokemon, from 1 to 811')
  }
  if(isNaN(number)){
    throw new SyntaxError('The function parameter must be a dex number of a Pokemon')
  } else if(number <= 0){
    throw new SyntaxError('The function parameter must be a dex number of a Pokemon, Minimum 1')
  } else if(number >= 812){
    throw new SyntaxError('The maximum number is 811')
  } else if(typeof number === 'string') parseInt(number)
  
  const fetch = require('node-fetch')
  const res = await fetch('https://poke-over.glitch.me/api/pokemon')
  const data = await res.json()
  return data[number];
}

const allPokemon = async function(){
  const fetch = require('node-fetch')
  const res = await fetch('https://poke-over.glitch.me/api/pokemon')
  const data = await res.json()
  return data;
}

module.exports = {
  allPokemon,
  getPokemon,
  randomPokemon
}