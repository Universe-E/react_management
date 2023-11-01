import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import {Outlet} from "react-router-dom";
import MainMenu from "@/components/MainMenu";

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor:"orange"}}>
            {/*left sider*/}
            <Sider collapsible collapsed={collapsed}
                   onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <MainMenu/>
            </Sider>
            {/*right contents*/}
            <Layout>
                {/*right header*/}
                <Header style={{ paddingLeft: '16px', background: colorBgContainer }}>
                    {/*Navigate element, called "Breadcrumb"*/}
                    <Breadcrumb style={{lineHeight: '64px'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/*right content*/}
                <Content style={{ margin: '16px 16px 0' }}>
                    {/*<div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>*/}
                    {/*    Bill is a cat.*/}
                    {/*</div>*/}
                    <Outlet/>
                </Content>
                {/*right footer*/}
                <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>
                    React Management Design 2023 Created by Zane Kong
                </Footer>
            </Layout>
        </Layout>
    );
};

export default View;