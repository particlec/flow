import { Layout, Modal } from 'antd';
import React from 'react';
import { Route } from 'react-router-dom';
import Head from '../workspace/head/head';
import ToolBar from '../workspace/tools/toolbar';

const { Header, Content, Footer, Sider } = Layout;

function CommonLayout({ path, component: Component }) {
  return (
    <Route path={path}>
      <Layout style={{ height: '100%' }}>
        <Header>
          <Head />
        </Header>

        <Layout>
          <sider>
            <ToolBar />
          </sider>
          <Content>
            <Component />
          </Content>
          {/*<Footer>*/}
          {/*  <ClipBottom />*/}
          {/*</Footer>*/}
        </Layout>
      </Layout>
    </Route>
  );
}
export default CommonLayout;
