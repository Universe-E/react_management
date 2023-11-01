import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, Space} from "antd";
import {useState} from "react";

const View = () => {
    //get todos array from state
    const {todos} = useSelector((state:RootState) => ({
        todos:state.handlePage2.todos
    }))
    //count done items
    const doneCount = todos.reduce((pre,cur)=>{
        return pre+(cur.done ? 1 : 0)
    },0)
    const totalCount = todos.length

    const dispatch = useDispatch()

    //select all checkbox
    const handleCheckAll = (e)=>{
        dispatch({type:"checkAllTodo",value:{done:e.target.checked}})
    }
    //clear all selected item
    const handleClearAllDone = ()=>{
        if (!window.confirm("Delete all done tasks?")) return;
        dispatch({type:"clearAllDone"})
    }

    return (
        <div>
            <Space direction="horizontal" size="large" style={{display:"flex"}}>
                <Checkbox onChange={handleCheckAll} checked={doneCount===totalCount && totalCount !== 0}/>
                <span style={{fontSize:"20px"}}>
                <span style={{color:'#ff5e00'}}>Done{doneCount}</span> / Total{totalCount}
            </span>
                <Button onClick={handleClearAllDone}>Clear All Done</Button>
            </Space>
        </div>
    );
}
export default View