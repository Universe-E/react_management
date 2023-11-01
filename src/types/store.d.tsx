//declare state return types
type RootState = ReturnType<any>
type ActionType = {type:string,value:any}

interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:Function;
}