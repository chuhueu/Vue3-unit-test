<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-if="count && count % 2 === 0">{{ count }}: Count is even</div>
    <div v-else>{{ count }}: Count is odd</div>
    <button @click="increment">
      {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex'
defineProps<{
  msg?: string,
}>()

const store = useStore()
const count = computed(() => store.state.count)

const increment = () => {
  store.commit('increment')
}

</script>

