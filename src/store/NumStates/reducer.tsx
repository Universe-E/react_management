import handleNum from "./index"

//initial state as handleNum.state
let reducer = (state = {...handleNum.state},action:ActionType) => {
    //deep copy
    let newState = JSON.parse(JSON.stringify(state))
    //get action type from actions, then handle directly
    const handle = handleNum.actions[action.type]
    if (handle) handle(newState,action)
    return newState
}
export default reducer