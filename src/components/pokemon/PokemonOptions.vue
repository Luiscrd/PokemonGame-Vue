<template>
    <div class="options-container mt-5 mb-4">
        <ul>
            <button
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            type="button"
            class="btn btn-primary"
            @click="$emit('selection', pokemon.id)"
            >{{ pokemon.name }}</button>
        </ul>
    </div>
</template>
  
<script>
  export default {
    props: {

        pokemons: {
            type: Array,
            required: true
        }

    }
  }
</script>
  
<style scoped>
ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
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
    width: 100%;
    margin-bottom: 10px;
}


.options-container {
    display: flex;
    justify-content: center;
}
  </style>