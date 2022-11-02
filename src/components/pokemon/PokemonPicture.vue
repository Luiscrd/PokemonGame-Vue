<template>
    <div class="pokemon-container mt-3">
        <img :src="imgSrc" class="hidden-pokemon" alt="pokemon">
        <img v-if="showPokemon" :src="imgSrc" class="fade-in" alt="pokemon">
    </div>
    

</template>

<script>

export default {

    props:{

        pokemonId: {
            type: Number,
            required: true

        },

        showPokemon: {
            type: Boolean,
            required: true,
            default: false

        }
    },

    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    }

}
</script>

<style scoped>
.pokemon-container {
    height: 250px;
    position: relative;
}
img {
  height: 250px;
  position: absolute;
  width: 100%;
  margin-left: -50%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>
