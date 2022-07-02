<template>
  导航页面
  <div>
    <router-link to="/">jimmy</router-link>
    <router-link to="/xx">coco</router-link>
  </div>
  <hr/>
  <router-view>
    
  </router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
