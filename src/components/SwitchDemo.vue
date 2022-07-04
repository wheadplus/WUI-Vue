<template>
  <div>
    <Switch v-model:value="flag"/>
    <!-- $event 等于子组件emit的参数 -->
    <!-- <Switch :value="flag" @update:value="flag = $event" ></Switch> -->
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: {Switch},
  setup(){
    const flag = ref(false)

    return {flag}
  }
}
</script>