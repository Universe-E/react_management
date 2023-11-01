import handlePage2 from "./index"

//initial state as handleNum.state
let reducer = (state = {...handlePage2.state},action:ActionType) => {
    //deep copy
    let newState = JSON.parse(JSON.stringify(state))
    //get action type from actions, then handle directly
    const handle = handlePage2.actions[action.type]
    if (handle) handle(newState,action)
    return newState
}
export default reducer