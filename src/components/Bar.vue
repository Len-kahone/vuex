<template>
    <div><h2>Bar组件</h2>
    
        <p>{{count}}</p>
        <p>{{msg}}</p>
        <p>{{isdone}}</p>
        <p>{{getTodoById(1).text}}</p>
        <button @click="increase">自增</button>
        <button @click="asyncIncrease({size:3})">异步自增</button>
        <button @click="change">改变</button>
        <p>moduleA里面的a为{{moduleA}}</p>
        <p>moduleA里面的getter中的a为{{moduleGettersA}}</p>
    </div>

</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
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
        ...mapMutations(["change"]),
        // ...mapActions(["asyncIncrease"]),
        asyncIncrease(params){
            this.$store.dispatch("asyncIncrease",params)
        }

    },
    created(){
        console.log(this.$store);
    },
    computed:{
        ...mapState(["count","msg"]),
        ...mapGetters(["isdone","getTodoById"]),
        moduleA(){
            return this.$store.state.moduleA.a
        },
        //注意module中的getters需要特殊处理，否则将会注入到全局命名空间中去
        // moduleGettersA(){
        //     return this.$store.getters["moduleA/a"]
        // },
        //或者
        ...mapGetters("moduleA",{
            moduleGettersA:"a"
        })
    }
}
</script>

<style>

</style>
