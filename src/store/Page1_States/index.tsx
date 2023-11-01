export default {
    state:{
        num:20,
        arr:[
            {id:0,val:10},
            {id:1,val:20},
            {id:2,val:30}
        ]
    },
    actions:{
        addOne:function(newState:RootState){
            setTimeout(()=>{
                newState.num++
            },500)
        },
        addVal:function(newState:RootState,action:ActionType){
            newState.num += action.value
        },
        pushNum:function(newState:RootState,action:ActionType){
            const lastId = newState.arr[newState.arr.length-1].id
            newState.arr.push({id:lastId+1,val:action.value})
        }
    }
}