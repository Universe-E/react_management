import handlePage1 from "./index"

//initial state as handleNum.state
let reducer = (state = {...handlePage1.state},action:ActionType) => {
    //deep copy
    let newState = JSON.parse(JSON.stringify(state))
    //get action type from actions, then handle directly
    const handle = handlePage1.actions[action.type]
    if (handle) handle(newState,action)
    return newState
}
export default reducer