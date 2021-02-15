<template>
  <div class="counter" :style="{ color: $store.state.colorCode }">
    {{ $store.state.counter }}
  </div>
</template>

<script>
export default {
  name: 'Counter'
};
</script>

<style>
.counter {
  font-size: 80px;
}
</style>
