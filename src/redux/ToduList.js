import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input,Button, List, Avatar } from 'antd';
import store from "../store";

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];


class AntdTodoList extends Component {
    render() {
        return (
            <div style={{marginTop: 10, marginLeft: 10}}>
                <div>
                    <Input placeholder={'antd info'} style={{width: 300, marginRight: 10}}/>
                    <Button type={'primary'}>提交</Button>
                </div>
                <List
                    style={{width: 300, marginTop: 10}}
                    bordered={true}
                    itemLayout="horizontal"
                    // dataSource={data}
                    dataSource={store.getState().list}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default AntdTodoList;
