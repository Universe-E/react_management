//declare state return types
type RootState = ReturnType<any>
type ActionType = {type:string,value:number}

interface Window{
    __REDUX_DEVTOOLS_EXTENSION__:Function;
}