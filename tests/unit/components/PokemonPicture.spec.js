import { shallowMount } from "@vue/test-utils"
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {

    test('Debe hacer match con el snapshot', () => {

        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })

    })

    test('Debe de mostrar la imagen oculta y el Pokémon 100', () => {

        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [img1, img2] = wrapper.findAll('img')
        const imgSource = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"

        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.classes('hidden-pokemon')).toBeTruthy()
        expect(img1.attributes('src')).toBe(imgSource);

    })

    test('Debe de mostrar el Pokémon si showPokemon: true', () => {

        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const [img1, img2] = wrapper.findAll('img')

        expect(img2.exists()).toBeTruthy()
        expect(img2.classes('hidden-pokemon')).toBe(false)
        expect(img2.classes('fade-in')).toBe(true)

    })

})