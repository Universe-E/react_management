import {useDispatch, useSelector} from "react-redux";
import {Button, Input, Space} from "antd";
import {ChangeEvent, useState} from "react";
import styles from "./page1.module.scss"

const View = () => {
    const {num,arr} = useSelector((state:RootState) => ({
        ...state
    }))

    //get value from input
    const [numVal,setNumVal] = useState("")
    const [arrVal,setArrVal] = useState("")

    const setNumInputVal = (e:ChangeEvent<HTMLInputElement>)=>setNumVal(e.target.value)
    const setArrInputVal = (e:ChangeEvent<HTMLInputElement>)=>setArrVal(e.target.value)

    const dispatch = useDispatch()
    // add value, if input value not assigned, add 1
    const changeNum = ()=>{
        if (numVal) dispatch({type: "addVal", value:parseInt(numVal)})
        else dispatch({type:"addOne",value:1})
    }
    //push value to array if input value is assigned
    const pushToArr = ()=> arrVal && dispatch({type:"pushNum",value:parseInt(arrVal)})
    return (
        <div className="page1">
            <Space direction="vertical" size="large" style={{display:"flex"}}>
                <p className={styles.p}>Number Add</p>
                <div style={{display:"flex",alignItems:"center"}}>
                    <Space direction="horizontal" size="middle" style={{display:"flex"}}>
                        <p className={styles.p}>{num}</p>
                        <Button onClick={changeNum}>num add</Button>
                        <Input type={"number"}
                               placeholder={"Input number, default 1"}
                               onChange={setNumInputVal}
                               style={{marginLeft:"20px", width:"200px"}}/>
                    </Space>
                </div>
                <p className={styles.p}>Array Manager</p>
                <Space direction="horizontal" size="middle" style={{display:"flex"}}>
                    <button onClick={pushToArr}>push</button>
                    <Input type={"number"}
                           placeholder={"Input number, default 1"}
                           onChange={setArrInputVal}
                           style={{marginLeft:"20px", width:"200px"}}/>
                </Space>
                <p className={styles.p}>
                    {
                        arr.map((i:number)=>{
                            return <li style={{fontSize:"large"}}>{i}</li>
                        })
                    }
                </p>
            </Space>
        </div>
    )
}
export default View