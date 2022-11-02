<template>
    <div class="titulo">
        <h1>¿Quién es este Pokémon?</h1>
    </div>
    <div v-if="!pokemon" class="container mt-5 text-center">
        <h1>Espere por favor...</h1>
    </div>
    <div v-else class="container mt-5 text-center">
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer"/>
        <div v-if="showAnswer" class="mb-5">
            <h2 class="mb-5">{{ message }}</h2>
            <button type="button" class="btn btn-primary" @click="newGame">Nuevo juego</button>
        </div>
    </div>
  
</template>

<script>
import PokemonPicture from '@/components/pokemon/PokemonPicture.vue'
import PokemonOptions from '@/components/pokemon/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonsOptions'


export default {
  components: { PokemonPicture },
    name: 'PokemonPage',
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[ rndInt ]
        },
        checkAnswer( selectedId ) {
            this.showPokemon = true
            this.showAnswer = true

            if( selectedId === this.pokemon.id ) {
                this.message = `Correcto, ${ this.pokemon.name }!!`
            } else {
                this.message = `Upss, era ${ this.pokemon.name }!!`
            }
        },
        newGame() {
            this.showAnswer = false
            this.showPokemon = false
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

<style scoped>
.titulo{
    background-color: #263238;
    color: white;
    padding: 40px 0;
    text-align: center;
}

.btn:hover {
    color: white;
    background-color: #13191c;
    border-color: #13191c;
}
.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #263238;
    --bs-btn-border-color: #263238;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #263238;
    --bs-btn-hover-border-color: #263238;
    --bs-btn-focus-shadow-rgb: 49,132,253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #263238;
    --bs-btn-active-border-color: #263238;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #263238;
    --bs-btn-disabled-border-color: #263238;
}

h2{
    color: #EF5350;
}
</style>
