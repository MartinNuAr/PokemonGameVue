import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions"
import { pokemon } from "../mocks/pokemon.mock";

describe('PokemonOptions component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemonGroup: pokemon
            }
        })
    })

    test('Debe hacer match con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe mostrar las 4 opciones correctamente', () => {

        const liElements = wrapper.findAll('li')

        expect(liElements.length).toBe(4)

        expect(liElements[0].text()).toBe('Pikachu')
        expect(liElements[1].text()).toBe('Charmander')
        expect(liElements[2].text()).toBe('Venusaur')
        expect(liElements[3].text()).toBe('Mew')

    })

    test('De emitir "selection" con sus respectivos parámetros al hacer click', () => {

        const [li1, li2, li3, li4] = wrapper.findAll('li')

        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(4)

        expect(wrapper.emitted('selection')[0]).toEqual([5])
        expect(wrapper.emitted('selection')[1]).toEqual([10])
        expect(wrapper.emitted('selection')[2]).toEqual([15])
        expect(wrapper.emitted('selection')[3]).toEqual([20])

    })

})
