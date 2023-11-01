import Header from "@/components/Page2/Header"
import List from "@/components/Page2/List"
import Footer from "@/components/Page2/Footer";
import {Space} from "antd";


const View = () => {
    return (
        <div style={{marginLeft:"30px"}}>
            <Space direction="vertical" size="middle" style={{display:"flex"}}>
                <Header/>
                <List/>
                <Footer/>
            </Space>
        </div>
    )
}
export default View