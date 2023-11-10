import {useEffect} from "react";
import {Button, Input, Checkbox, Form} from "antd";
import initLoginBg from "./init.ts";
import styles from "./login.module.scss"
import "./login.less"
import {reqLogin} from "@/api";

const View = () => {
    //init background after component mounted
    useEffect(()=>{
        initLoginBg()
        window.onresize = function () {initLoginBg()}
    },[])
    const onFinish = (values: any) => {
        const {username,password} = values
        reqLogin(username,password).then(response=>{
            console.log('Success',response.data)
        }).catch(error=>{
            console.log('Failed',error)
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        // console.log('Failed:', errorInfo);
    };
    //custom validate method
    const validate = (fieldName:string)=>{
        return (rule,value,callback)=>{
            if (!value) callback('Please input your '+fieldName+'!')
            else if (!/^[a-zA-Z0-9]+$/.test(value)) callback(fieldName+' must be Lower/Upper case, or number!')
            else if (value.length < 4 || value.length > 16) callback(fieldName+' length must be in range 4-16!')
            else callback()//no message, callback accepted
        }
    }
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
    };
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
                <Form
                    name="basic"
                    labelCol={{ span: 8}}
                    wrapperCol={{ span: 16}}
                    style={{ maxWidth: 600}}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{validator:validate("Username")}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{validator:validate("Password")}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                        style={{color:"white"}}
                    >
                        <Checkbox style={{color:"white"}}>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default View