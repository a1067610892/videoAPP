<template>
  <div id="app">
    <keep-alive exclude="Content, Filmdetails">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
