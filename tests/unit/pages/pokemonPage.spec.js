import { mount, shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage.vue'
import { mockPokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

    let wrapper
    let mixPokemonArraySpy

    beforeEach(() => {

        mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')

        wrapper = mount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

    });


    test('Debe de llamar mixPokemonArray al montar', () => {


        expect(mixPokemonArraySpy).toHaveBeenCalled()

    })

    test('Debe de hacer mach con el snapshot cuando se cargan los Pokémons', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.find('pokemon-picture-stub').exists()).toBeTruthy()

        expect(wrapper.find('pokemon-options-stub').exists()).toBeTruthy()

        expect(wrapper.find('pokemon-picture-stub').attributes('pokemonid')).toBe('1')

        expect(wrapper.find('pokemon-options-stub').attributes('pokemons')).toBeTruthy()

    })

    test('Pruebas con el checkAnswer', async () => {

        wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        expect(wrapper.vm.showPokemon).toBeTruthy()

        expect(wrapper.find('h2').text()).toBe('Correcto, bulbasaur!!')

        await wrapper.vm.checkAnswer(2)

        expect(wrapper.find('h2').text()).toBe('Upss, era bulbasaur!!')


    })


})