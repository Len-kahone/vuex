import Vue from "vue"
import Vuex from "vuex"
import INCREASE from "./mutation-type"

Vue.use(Vuex)
 const store=new Vuex.Store({
    state:{
        count:10,
        msg:"hello world",
        todos:[
            {id:1,text:"吃饭",done:true},
            {id:2,text:"睡觉",done:false},
            {id:3,text:"打豆豆",done:true},
            {id:4,text:"打代码",done:true}
        ]
    },
    mutations:{
        increase(state,params){
            let {size}=params
            state.count+=size
        },
        change(state){
            state.msg="what the fuck"
        }
    },
    getters:{
        isdone:(state)=>state.todos.filter(item=>item.done==true).length,
        getTodoById:(state,id)=>{
            return id=>{
               return state.todos.find(item=>item.id===id)
            }
        }
    },
    actions:{
        asyncIncrease({commit},params){
           setTimeout(()=> {
             commit('increase', params)
           }, 1000)
        }
    }
})


 export default store