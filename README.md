# poke-over
A Pokemon Package to simplify the use of my Pokemon API

[API](https://poke-over.glitch.me/api)

## What i can do?
You can do many things with enough imagination and creativity; 
However a couple of things that come to mind are:
a "Who is that Pokemon?",
A Pokedex (coming soon)

Or something more specific would be a "Pokecord", a Pokemon Discord bot

# Methods

## randomPokemon

As the name indicates, it returns a JSON of a Random Pokemon, the JSON includes the name of the Pokemon and its respective image

### Async/await

      const over = require('poke-over')
      let random = await over.randomPokemon()
      // random is the JSON of the Random Pokemon

### No-Async/then

      const over = require('poke-over')
      over.randomPokemon().then(random => {
        random
      })

Returns:
      
      {
        name: 'Pokemon Name',
        imageURL: 'the URL of an Image of the Pokemon'
      }


## getPokemon

This method receives a parameter of a number from 1 to 811, for example to get Bulbasaur you would have to put 1 as a parameter of the function, the number would be the pokedex number of the Pokemon

### Async/await

      const over = require('poke-over')
      let get = await over.getPokemon(1)
      // get is the JSON of the Pokemon we got

### No-Async/then

      const over = require('poke-over')
      over.getPokemon(1).then(get => {
        get
      })

Returns:
      
      {
        name: 'bulbasaur',
        imageURL: 'imageurl of bulbasaur'
      } // It returns the information of bulbasaur because i put 1 as the number

## allPokemon

This method is for very specific things because it returns a JSON of an Array of Objects of All Pokemon

### Async/await

      const over = require('poke-over')
      let all = over.allPokemon()
      // all is the JSON of ALL Pokemon

### No-Async/then

      const over = require('poke-over')
      over.allPokemon().then(all => {
        all 
      })

Returns:

      /* 
      For obvious reasons I can't put what it returns but you can see it at https://poke-over.glitch.me/api/pokemon
      */