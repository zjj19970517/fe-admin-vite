<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from './store'
import HelloWorld from '@/components/HelloWorld.vue'

const store = useStore(key)
</script>

<template>
  <img
    alt="Vue logo  "
    src="@/assets/"
  >

  {{ $store.state.count }}

  {{ store.state.count }}
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url(@/assets/logo.png);
}
</style>
