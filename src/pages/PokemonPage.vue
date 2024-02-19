<template>
    <h1 v-if="!pokemon">Cargando...</h1>
    <div v-else>

        <h1>¿Quién es este Pokémon?</h1>

        <PokemonPicture 
            :pokemonId="pokemon.id" 
            :showPokemon="showPokemon" 
        />

        <PokemonOptions 
            :pokemonGroup="pokemonArr" 
            @selection="checkAnswer" 
        />

        <div v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </div>

    </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()

            const randInt = Math.floor( Math.random() * 4)
            this.pokemon = this.pokemonArr[ randInt ]
        },
        checkAnswer(selectedId) {
            this.showPokemon = true
            this.showAnswer = true

            if (selectedId === this.pokemon.id) {
                this.message = `¡Correcto, es ${ this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1) }!`
            } else {
                this.message = `Incorrecto, el Pokémon es ${ this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1) }`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null

            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>

<style>

</style>