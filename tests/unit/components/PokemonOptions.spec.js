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

        console.log(liElements)

        expect(liElements.length).toBe(4)

    })

    test('De emitir "selection" con sus respectivos parámetros al hacer click', () => {

        

    })

})
