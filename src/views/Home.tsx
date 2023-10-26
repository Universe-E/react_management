import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet, useNavigate} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Column 1', '/page1', <PieChartOutlined />),
    getItem('Column 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navToPath = useNavigate()

    //click and redirect to corresponding router
    const menuClick = (e:{key:string})=>{
        //use hook to implement redirect
        navToPath(e.key)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/*left sider*/}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}
                    onClick={menuClick}/>
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