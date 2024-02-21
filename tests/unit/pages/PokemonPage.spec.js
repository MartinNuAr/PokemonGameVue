import { shallowMount, mount } from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage"
import { pokemon } from "../mocks/pokemon.mock"
import PokemonOptions from "@/components/PokemonOptions"
import PokemonPicture from "@/components/PokemonPicture"

describe('PokemonPage Component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('Debe hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Debe de llamar mixPokemonArray al montar', () => {

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toHaveBeenCalled()

    })

    test('Debe hacer match con el snapshot cuando cargan los Pokémon', () => {
        
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemon,
                    pokemon: pokemon[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemon,
                    pokemon: pokemon[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })
        const pokemonOptions = wrapper.findComponent(PokemonOptions)
        const pokemonPicture = wrapper.findComponent(PokemonPicture)

        expect(pokemonOptions.exists()).toBeTruthy()
        expect(pokemonPicture.exists()).toBeTruthy()

        expect(pokemonPicture.attributes('pokemonid')).toBe("5")
        expect(pokemonOptions.attributes('pokemongroup')).toBeTruthy()

    })

    test('Pruebas con checkAnswer', async() => {

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemon,
                    pokemon: pokemon[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(5)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`¡Correcto, es ${ pokemon[0].name.charAt(0).toUpperCase() + pokemon[0].name.slice(1) }!`)

        await wrapper.vm.checkAnswer(10)
        
        expect(wrapper.vm.message).toBe(`Incorrecto, el Pokémon es ${ pokemon[0].name.charAt(0).toUpperCase() + pokemon[0].name.slice(1) }`)
    })

})