import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import {ChangeEvent, useState} from "react";
import {Input} from "antd";

const View = () => {

    //get value from input
    const [todoName,setTodoName] = useState("")
    const setInputName = (e:ChangeEvent<HTMLInputElement>)=>setTodoName(e.target.value)

    const dispatch = useDispatch()

    //get key event
    const handleKeyUp = (e:any)=>{

        const {keyCode,target} = e
        //is Enter key
        if (keyCode !== 13) return
        //"todoName" is not empty
        if (todoName.trim() === "") {
            alert("todoName is not empty!")
            return;
        }
        //prepare a todoObj
        const todoObj = {id:nanoid(),name:todoName,done:false}
        dispatch({type:"addTodo",value:todoObj})
    }
    return (
        <div>
            <Input type="text"
                   onKeyUp={handleKeyUp}
                   onChange={setInputName}
                   placeholder={"Please enter your task，press Enter"}
                   style={{width:"300px"}}/>
        </div>
    );
}
export default View