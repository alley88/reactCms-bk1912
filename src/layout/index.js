import React, { Component } from 'react'
import { Layout, Menu} from 'antd';
import renderTabBar from "@utils/renderTabBar"
import {layoutRoute} from "@router"
import {withRouter} from "react-router-dom"
const { Header, Content, Footer, Sider } = Layout;

@withRouter
class LayoutComponent extends Component {
    render() {
        return (
            <Layout>
                {/* 左边边的内容区 */}
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <div className="logo" />
                    <Menu 
                        theme="dark" 
                        mode="inline" 
                        defaultSelectedKeys={["/home"]} 
                        onClick={this.handleTo.bind(this)}
                        >
                       {renderTabBar(layoutRoute)}
                    </Menu>
                </Sider>
                {/* 右边的内容区 */}
                <Layout style={{ marginLeft: 200 }}>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
    handleTo({key}){
        this.props.history.push(key);
    }
}
export default LayoutComponent;