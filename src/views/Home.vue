<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <CounterSquared />
    <Buttons />
    <ColorCode />
  </div>
</template>

<script>
import Counter from '../components/Counter.vue';
import CounterSquared from '../components/CounterSquared.vue';
import Buttons from '../components/Buttons.vue';
import ColorCode from '../components/ColorCode.vue';

export default {
  name: 'Home',
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode
  }
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
