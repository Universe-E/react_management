import {useDispatch, useSelector} from "react-redux";
import {Button, Input, Space} from "antd";
import {ChangeEvent, useState} from "react";

const View = () => {
    const {num,arr} = useSelector((state:RootState) => ({
        ...state
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
            <Space direction="vertical" size="large" style={{display:"flex"}}>
                <p>This is component Page1</p>
                <div style={{display:"flex",alignItems:"center"}}>
                    <Space direction="horizontal" size="middle" style={{display:"flex"}}>
                        <p>{num}</p>
                        <Button onClick={changeNum}>num++</Button>
                        <Input type={"number"}
                               placeholder={"Input number, default 1"}
                               onChange={setInputVal}
                               style={{marginLeft:"20px", width:"200px"}}/>
                    </Space>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p>
                        <ul></ul>
                    </p>
                </div>
            </Space>
        </div>
    )
}
export default View