import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import styled from "styled-components";

import { SecurityScanTwoTone } from '@ant-design/icons';
import { Layout, Menu, Divider } from 'antd';
import Devices from "./pages/Devices";
const { Header, Content, Footer } = Layout;

const NavigationHeader = styled(Header)`
  padding: 0px;
  display: flex;
  align-items: center;
`

const Logo = styled(SecurityScanTwoTone)`
  font-size: 32px;
`

const PageContent = styled(Content)`
  min-height: calc(100vh - 64px - 70px);
  padding: 20px 50px;
`

export default function Dashboard() {
  return (
      <Router>
        <Layout>
          <NavigationHeader>
            <Divider type="vertical" />
            <Logo />
            <Divider type="vertical" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/devices">Fleet Scanner</Link></Menu.Item>
            </Menu>
          </NavigationHeader>

          <PageContent>
            <Switch>
              <Redirect exact from="/" to="/devices" />
              <Route exact path="/devices">
                <Devices />
              </Route>
              <Route path='*' exact={true} component={() => { return <>Not Found</> }} />
            </Switch>
          </PageContent>

          <Footer style={{ textAlign: 'center' }}>©2020 Fleet Scanner</Footer>
        </Layout>
      </Router>
  );
}