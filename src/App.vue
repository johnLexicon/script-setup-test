<template>
  <h2>Home Page</h2>
  <p>Counter: {{ counter }}</p>
  <p>Double count: {{ doubleCount }}</p>
  <p>Name: {{ name }}</p>
  <div>
    <button @click="increment(1)">Add one</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/useCounter.js";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { counter, name, doubleCount } = storeToRefs(store);
const { increment } = store;
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
