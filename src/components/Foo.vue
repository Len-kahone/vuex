<template>
  <div>
    <h2>Foo组件</h2>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            num:"hello Foo"
        }
    },
    computed:{
        count(){
            return this.$store.state.count
        }
    }
};
</script>

<style>
</style>
