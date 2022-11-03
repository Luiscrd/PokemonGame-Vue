import getPokemonOptions, { getPokemons, getPokemonsName } from '@/helpers/getPokemonsOptions'
import { mockPokemons } from '../mocks/pokemons.mock'

describe('getPokemonsOptions helpers', () => {

    test('Debe regresar un arreglo de numeros', () => {

        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)

    })

    test('Debe regresar un arreglo de 4 elementos con los nombres de los Pokémons', async () => {

        const pokemons = await getPokemonsName([1, 2, 3, 4])

        expect(pokemons).toStrictEqual(mockPokemons)

    })

    test('getPokemonsOptions debe regresar un arreglo mezclado', async () => {

        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)

        expect(pokemons).toEqual([
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])

    })

})