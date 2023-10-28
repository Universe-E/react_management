import styles from "./login.module.scss"
import {useEffect} from "react";
import initLoginBg from "@/views/Login/init.ts";

const View = () => {

    //init background after component mounted
    useEffect(()=>{
        initLoginBg()
        window.onresize = function () {initLoginBg()}
    },[])
    return (
        <div className={styles.loginPage}>
            {/*store the background*/}
            <canvas id="canvas" style={{display:"block"}}>canvas</canvas>
            {/*login box*/}
            <div className={styles.loginBox}>
                {/*title*/}
                <div className={styles.title}>
                    <h1>React Management System</h1>
                    <p>Strive Everyday</p>
                </div>
            </div>
        </div>
    )
}
export default View