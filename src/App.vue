<template>
  <div id="app">
   
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
import Foo from './components/Foo.vue'
import Bar from './components/Bar.vue'

export default {
  name: 'app',
  components: {
   Foo,
   Bar
  }
}
</script>

<style>

</style>
