// BigInt   ||  use 'n' like 2n for really big numbers

// New Statement    ||    'x'?.'x'?.
// Ex:

let andrei_pokemon = {
    pikachu: {
        species: 'mouse pokemon',
        height: 0.8,
        weight: 30
    }
}

// let weight = andrei_pokemon.pikachu.wieght   ||  wrong
// ?.   ||  right
let weight = andrei_pokemon?.pikachu?.weight
// right. it is andrei's pokemon? if it is continue... it is a pikachu? if yes continue, else stop and set undefined

// ??
let power = andrei_pokemon?.pikachu?.power ?? "no power"