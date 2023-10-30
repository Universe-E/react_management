import handleNum from "./index"

//initial state as handleNum.state
let reducer = (state = {...handleNum.state},action:ActionType) => {
    //deep copy
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "add":
            handleNum.actions.add(newState)
            break
        case "addVal":
            handleNum.actions.addVal(newState,action)
            break
        case "pushNum":
            handleNum.actions.pushNum(newState,action)
            break
        default:
            break
    }

    return newState
}
export default reducer