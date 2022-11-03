import pokemonApi from '@/api/PokemonApi'

describe('Pokemon Api', () => {

    test('Axios debe de estar configurado con el api de Pokémon', () => {

        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')

    })

})