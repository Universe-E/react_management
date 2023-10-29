import {ChangeEvent, useEffect, useState} from "react";
import {Button, Input, Space} from "antd";
import initLoginBg from "./init.ts";
import styles from "./login.module.scss"
import "./login.less"

const View = () => {
    //init background after component mounted
    useEffect(()=>{
        initLoginBg()
        window.onresize = function () {initLoginBg()}
    },[])
    // values input from user
    const [usernameVal,setUsernameVal] = useState("");
    const [passwordVal,setPasswordVal] = useState("");
    const [captchaVal,setCaptchaVal] = useState("");
    // store captcha images
    const [captchaImg,setCaptchaImg] = useState("");

    const userNameChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setUsernameVal(e.target.value);
    }
    const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setPasswordVal(e.target.value);
    }
    const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setCaptchaVal(e.target.value);
    }
    const gotoLogin = () =>{
        console.log(usernameVal,passwordVal,captchaVal)
    }
    return (
        <div className={styles.loginPage}>
            {/*store the background*/}
            <canvas id="canvas" style={{display:"block"}}>canvas</canvas>
            {/*login box*/}
            <div className={styles.loginBox + " loginbox"}>
                {/*title*/}
                <div className={styles.title}>
                    <h1>Uranus Management System</h1>
                    <p>Strive Everyday</p>
                </div>
                {/*form*/}
                <div className="form">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Input placeholder="User Name" onChange={userNameChange}/>
                        <Input.Password placeholder="Password" onChange={passwordChange}/>
                        <div className="captchabox">
                            <Input placeholder="Type the Text" onChange={captchaChange}/>
                        </div>
                        <Button type="primary" className="loginbtn" block onClick={gotoLogin}>Login</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default View