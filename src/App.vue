<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from './store'
import HelloWorld from '@/components/HelloWorld.vue'

const store = useStore(key)
</script>

<template>
  <img
    alt="Vue logo  "
    src="@/assets/logo.png"
  >

  <span class="title">
    测试样式
    {{ store.state.count }}
  </span>

  <span class="theme">
    测试主题
  </span>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="postcss">
@import "@/styles/variables.pcss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url(@/assets/logo.png);
}

.theme {
  color: $fontColor;
}
</style>
