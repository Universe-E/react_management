import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox, Space} from "antd";

const View = () => {

    //get todos array from state
    const {todos} = useSelector((state:RootState) => ({
        todos:state.handlePage2.todos
    }))
    const dispatch = useDispatch()

    //select and unselect
    const handleCheck = (id)=>{
        return (e) =>{
            dispatch({type:"updateTodo",value:{id,done:e.target.checked}})
        }
    }

    //response to delete
    const handleDelete = (id)=>{
        return ()=>{
            if (!window.confirm("Delete this task?")) return;
            dispatch({type:"deleteTodo",value:id})
        }
    }
    return (
        <ul className="todo-main">
            <Space direction="vertical" size="small" style={{display:"flex"}}>
                {
                    todos.map((todo:any) => {
                        return (
                            <li key={todo.id}>
                                <Space direction="horizontal" size="large" style={{display:"flex"}}>
                                    <Checkbox checked={todo.done} onChange={handleCheck(todo.id)}/>
                                    <span style={{fontSize:"20px"}}>{todo.name}</span>
                                    <Button onClick={handleDelete(todo.id)}>Delete</Button>
                                </Space>
                            </li>
                        )
                    })
                }
            </Space>
        </ul>
    );
}
export default View