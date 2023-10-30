export default {
    state:{
        num:20,
        arr:[10,20,30]
    },
    actions:{
        addOne:function(newState:RootState){
            newState.num++
        },
        addVal:function(newState:RootState,action:ActionType){
            newState.num += action.value
        },
        pushNum:function(newState:RootState,action:ActionType){
            newState.arr.push(action.value)
        }
    }
}