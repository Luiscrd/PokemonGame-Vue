import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/pokemon/PokemonOptions.vue'
import { mockPokemons } from '../../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockPokemons
            }
        })

    });

    test('Debe de hacer mach con el snapshot', () => {

        console.log(wrapper.html());

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de mostrar las 4 opciones correctamente', () => {

        const btns = wrapper.findAll('button')

        expect( btns.length).toBe(4)

        const [btn1, btn2, btn3, btn4] = btns

        expect(btn1.text()).toBe('bulbasaur')

        expect(btn2.text()).toBe('ivysaur')

        expect(btn3.text()).toBe('venusaur')

        expect(btn4.text()).toBe('charmander')

    })

    test('Debe emitir "selection" con sus respectivos parametros al hacer click', () => {

        const [btn1, btn2, btn3, btn4] = wrapper.findAll('button')

        btn1.trigger('click')

        btn2.trigger('click')

        btn3.trigger('click')

        btn4.trigger('click')

        expect( wrapper.emitted('selection').length ).toBe(4)

        expect( wrapper.emitted('selection')[0] ).toEqual([1])

        expect( wrapper.emitted('selection')[1] ).toEqual([2])

        expect( wrapper.emitted('selection')[2] ).toEqual([3])
        
        expect( wrapper.emitted('selection')[3] ).toEqual([4])

    })

})