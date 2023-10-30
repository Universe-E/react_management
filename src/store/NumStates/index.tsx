export default {
    state:{
        num:20,
        arr:[10,20,30]
    },
    actions:{
        add(newState:RootState){
            newState.num++
        },
        addVal(newState:RootState,action:ActionType){
            newState.num += action.value
        },
        pushNum(newState:RootState,action:ActionType){
            newState.arr.push(action.value)
        }
    }
}