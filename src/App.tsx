import { useState } from 'react'
import Comp1 from "@/components/Comp1";
import Comp2 from "@/components/Comp2"
import {Button} from "antd";
import {UpCircleOutlined} from "@ant-design/icons";

function App() {
  // @ts-ignore
    const [count, setCount] = useState(0)

  return (
    <div className="App">
        App Component
        <Comp1/>
        <Comp2/>
        <Button type="primary">button</Button>
        <UpCircleOutlined style={{fontSize:"40px",color:"red"}}/>
    </div>
  )
}

export default App
