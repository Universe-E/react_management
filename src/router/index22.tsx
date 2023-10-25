import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"
// History-model BrowserRouter
const baseRouter = () => (
    <BrowserRouter>
        {/*multiple routes*/}
        <Routes>
            <Route path="/" element={<App/>}>
                {/* redirect to path: "/home"*/}
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter
