<template>
    <div><h2>Bar组件</h2>
    
        <p>{{count}}</p>
        <p>{{msg}}</p>
        <p>{{isdone}}</p>
        <p>{{getTodoById(1).text}}</p>
        <button @click="increase">自增</button>
        <button @click="change">改变</button>
    </div>

</template>

<script>
import {mapState,mapGetters,mapMutations} from "vuex"
export default {
    data(){
        return {
            num:0
        }
    },
    methods:{
        increase(){
            this.$store.commit({
                type:"increase",
                size:3
            })
        },
        ...mapMutations(["change"])

    },
    computed:{
        ...mapState(["count","msg"]),
        ...mapGetters(["isdone","getTodoById"])
    }
}
</script>

<style>

</style>
