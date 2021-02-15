<template>
  <div class="buttons">
    <button @click="$store.dispatch('decreaseCounter')">-</button>
    <button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
</template>

<script>
export default {
  name: 'Buttons'
};
</script>

<style>
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
