export default {
    state:{
        todos:[
            {id:'001',name:'Club',done:true},
            {id:'002',name:'Sleep',done:false},
            {id:'003',name:'Code',done:true},
            {id:'004',name:'Wander',done:true}
            ]
    },
    actions:{
        addTodo:function (newState:RootState,action:ActionType){
            newState.todos = [action.value,...newState.todos]
        },
        updateTodo:function (newState:RootState,action:ActionType){
            const{id,done} = action.value
            newState.todos = newState.todos.map((todo: any) => {
                //change done value if id is equal
                if (todo.id === id) return {...todo, done}
                else return todo
            })
        },
        deleteTodo:function (newState:RootState,action:ActionType){
            const id = action.value
            newState.todos = newState.todos.filter((todo:any)=>{
                return todo.id !== id
            })
        },
        checkAllTodo:function (newState:RootState,action:ActionType){
            const isDone = action.type
            newState.todos = newState.todos.map((todo:any)=>{
                return {...todo,done:isDone}
            })
        },
        clearAllDone:function (newState:RootState){
            newState.todos = newState.todos.filter((todo:any)=>{
                return !todo.done
            })
        }
    }
}