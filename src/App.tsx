import { useState } from 'react'
import {Link, useRoutes} from "react-router-dom";
import router from "@/router";

function App() {
    const [count, setCount] = useState(0)
    //using hook to "mount" router
    const outlet = useRoutes(router)

  return (
    <div className="App">
        {/*outlet window shows components*/}
        {outlet}
    </div>
  )
}

export default App
