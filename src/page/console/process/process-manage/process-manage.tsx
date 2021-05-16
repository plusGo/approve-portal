import React, {useEffect} from 'react';
import {Button, Dropdown, Form, Input, Menu, Space, Table, Tag} from 'antd';
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';
import {ComponentProps} from '../../../../model/props/component-props';

export default function ProcessManage(props: ComponentProps): JSX.Element {
    const [form] = Form.useForm();
    useEffect(() => {
        const selectedMenuKey = props?.location?.pathState;
    }, []);

    const moreActionMenu = (<Menu>
        <Menu.Item key="0">
            批量删除
        </Menu.Item>
        <Menu.Item key="1">
            刷新数据
        </Menu.Item>
    </Menu>);

    const columns: any = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (tags: any[]) => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: string, record: any) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    return (
        <React.Fragment>
            <div className="common-table-search">
                <Form form={form} layout="inline">
                    <Form.Item label="流程名称">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="流程编码">
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">搜索</Button>
                        <Button>重置</Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="common-table-ops">
                <Button icon={<PlusOutlined/>} type="primary">新建</Button>
                <Dropdown overlay={moreActionMenu}>
                    <Button icon={<SettingOutlined/>}>更多</Button>
                </Dropdown>
            </div>
            <div className="common-table-wrapper">
                <Table columns={columns} dataSource={data}/>
            </div>
        </React.Fragment>
    )
}
