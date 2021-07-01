import { Modal, Menu, Tabs } from 'antd';
import React, { useState } from 'react';
import ToolsDetail from './toolsDetail';

function ToolBar({}) {
  const [activeTabKey, setActiveTabKey] = useState('1');
  return (
    <div style={{ height: 'auto' }} className="logo-title">
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane
          tab="系统组件"
          key="1"
          onClick={() => {
            setActiveTabKey('1');
          }}
        >
          {activeTabKey === '1' && <ToolsDetail />}
        </Tabs.TabPane>
        {/*<Tabs.TabPane*/}
        {/*  tab="图层"*/}
        {/*  key="2"*/}
        {/*  onClick={() => {*/}
        {/*    setActiveTabKey('2');*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Content of Tab Pane 2*/}
        {/*</Tabs.TabPane>*/}
        <Tabs.TabPane
          tab="自定义组件"
          key="3"
          onClick={() => {
            setActiveTabKey('3');
          }}
        >
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
export default ToolBar;
