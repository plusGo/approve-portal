import React, {useEffect} from 'react';
import {Button, Dropdown, Menu} from 'antd';
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';
import {ComponentProps} from '../../../../model/props/component-props';


export default function ProcessManage(props: ComponentProps): JSX.Element {
    useEffect(() => {
        const selectedMenuKey = props?.location?.pathState;
    }, []);

    const menu = (<Menu>
        <Menu.Item key="0">
            批量删除
        </Menu.Item>
        <Menu.Item key="1">
            刷新数据
        </Menu.Item>
    </Menu>);

    return (
        <React.Fragment>
            <div className="common-table-search"></div>
            <div className="common-table-ops">
                <Button icon={<PlusOutlined/>} type="primary">新建</Button>
                <Dropdown overlay={menu}>
                    <Button icon={<SettingOutlined/>}>更多</Button>
                </Dropdown>
            </div>
            <div className="common-table-wrapper"></div>
        </React.Fragment>
    )
}
