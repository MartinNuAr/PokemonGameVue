import getPokemonOptions, { getPokemon, getPokemonNames } from "@/helpers/getPokemonOptions"

describe('getPokemonOptions helpers', () => {

    test('Debe de regresar un arreglo de números', () => {

        const pokemon = getPokemon()

        expect(pokemon.length).toBe(650)
        expect(pokemon[0]).toBe(1)
        expect(pokemon[500]).toBe(501)
        expect(pokemon[649]).toBe(650)

    })

    test('Debe retornar un arreglo de 4 elementos con nombres diferentes', async() => {

        const pokemon = await getPokemonNames([1, 2, 3, 4])

        expect(pokemon).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])

    })

    test('getPokemonOptions debe retornar un arreglo mezclado', async() => {
        
        const pokemon = await getPokemonOptions()

        expect(pokemon.length).toBe(4)
        expect(pokemon).toEqual([
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