import pokemonApi from '../api/PokemonApi'

export const getPokemons = () => {

    const pokemoArr = Array.from( Array(650) )

    return pokemoArr.map( ( _, index ) => index + 1 )

}

const getPokemonOptions = async () => {

    const mixPokemons = getPokemons().sort( () => Math.random() -0.5 )

    const pokemons = await getPokemonsName( mixPokemons.splice(0,4) )

    return pokemons

}

export const getPokemonsName = async ( [a,b,c,d] ) => {

    const arrPromises = [
        await pokemonApi.get(`/${ a }`),
        await pokemonApi.get(`/${ b }`),
        await pokemonApi.get(`/${ c }`),
        await pokemonApi.get(`/${ d }`),
    ]

    const [ p1, p2, p3, p4 ] = await Promise.all( arrPromises )

    return [
        { name: p1.data.name, id: p1.data.id },
        { name: p2.data.name, id: p2.data.id },
        { name: p3.data.name, id: p3.data.id },
        { name: p4.data.name, id: p4.data.id },
    ]
}


export default getPokemonOptions