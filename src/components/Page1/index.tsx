import {useDispatch, useSelector} from "react-redux";
import {Button, Input} from "antd";
import {ChangeEvent, useState} from "react";

const View = () => {
    const {num} = useSelector((state:RootState) => ({
        num:state.num
    }))
    //get value from input
    const [val,setVal] = useState("")
    const setInputVal = (e:ChangeEvent<HTMLInputElement>)=>{
        setVal(e.target.value)
    }
    const dispatch = useDispatch()
    // add value, if input value not assigned, add 1
    const changeNum = ()=>{
        if (val) dispatch({type: "addVal", value:parseInt(val)})
        else dispatch({type:"add",value:1})
    }
    return (
        <div className="page1">
            <p>This is component Page1</p>
            <p>{num}</p>
            <div style={{display:"flex",alignItems:"center"}}>
                <Button onClick={changeNum}>num++</Button>
                <Input type={"number"}
                       placeholder={"Input number, default 1"}
                       onChange={setInputVal}
                       style={{marginLeft:"20px", width:"200px"}}/>
            </div>
        </div>
    )
}
export default View