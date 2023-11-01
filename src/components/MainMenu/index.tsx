import {Menu, MenuProps} from "antd";
import React, {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from "@ant-design/icons";

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

const items:MenuItem[] = [
    getItem('Num Management', '/page1', <PieChartOutlined />),
    getItem('Task List', '/page2', <DesktopOutlined />),
    getItem('Column 3', '/page3', <UserOutlined />, [
        getItem('Column 3-1', '/page3/1',<TeamOutlined/>,[
            getItem('Column 3-1-1', '/page3/1/1'),
            getItem('Column 3-1-2', '/page3/1/2'),
            getItem('Column 3-1-3', '/page3/1/3'),
        ]),
        getItem('Column 3-2', '/page3/2'),
        getItem('Column 3-3', '/page3/3'),
    ]),
    getItem('Column 4', '/page4', <TeamOutlined />, [
        getItem('Column 4-1', '/page4/1'),
        getItem('Column 4-2', '/page4/2')
    ]),
    getItem('Column 5', '/page5', <FileOutlined />),
];

const Comp: React.FC = () => {
    const navToPath = useNavigate()
    const curRoute = useLocation()
    //click and redirect to corresponding router
    const menuClick = (e:{key:string})=>{
        //use hook to implement redirect
        navToPath(e.key)
    }

    // initialize menu key that contains curRoute.pathname in items
    const defaultOpenKeys = () => {
        let arr:string[] = []
        function findByPath(path:string,items:MenuItem[]) {
            if (!items) return
            for (const item of items) {
                const curKey = item.key
                if (curKey === path) return
                if (item.children) {
                    if (path.startsWith(curKey)) arr.push(curKey)
                    findByPath(path,item!['children'])
                }
            }
        }
        findByPath(curRoute.pathname,items);
        return arr
    }


    const [openKeys, setOpenKeys] = useState(defaultOpenKeys);
    // click menu to open and close menu
    // "keys" is a string array, record the open states of menuItems
    const handleOpenChange = (keys:String[])=>{
        setOpenKeys(keys)
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[curRoute.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}
            openKeys={openKeys}
        />
    )
}
export default Comp