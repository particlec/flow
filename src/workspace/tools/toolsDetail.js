import { Menu, Modal } from 'antd';
import React from 'react';
import { Tools } from './tools';
import Icon from '@ant-design/icons';

function ToolsDetail() {
  const PandaIcon = props => <Icon component={PandaSvg} {...props} />;
  return (
    <Menu style={{ width: 158 }} defaultOpenKeys={['sub1']} mode="inline">
      <Menu.SubMenu key="sub1" title="基本图形">
        <div>
          {Tools.map(button => {
            return (
              <div>
                <PandaIcon />
                <i></i>
                <img alt={button.name} src={button.image} />
              </div>
            );
          })}
        </div>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub1" title="html元素">
        <div>11111</div>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub1" title="antd组件">
        <div>11111</div>
      </Menu.SubMenu>
    </Menu>
  );
}
export default ToolsDetail;
