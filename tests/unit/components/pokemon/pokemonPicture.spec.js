import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/pokemon/PokemonPicture.vue'

describe('PokemonOptions Component', () => {

    let wrapper;

    test('Debe de hacer mach con el snapshot', () => {

        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
    
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de mostrar la imagen oculta y el Pokémon 100', () => {

        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const img = wrapper.find('img')

        expect(img.exists()).toBeTruthy()

        expect(img.classes('hidden-pokemon')).toBeTruthy()

        expect(img.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')

    })

    test('Debe de mostrar el Pokémon si showPokemon: true', () => {

        wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect(img1.exists()).toBeTruthy()

        expect(img2.exists()).toBeTruthy()

        expect(img2.classes('fade-in')).toBeTruthy()

        expect(img2.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    
    })

})