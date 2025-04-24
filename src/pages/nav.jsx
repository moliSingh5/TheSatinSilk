import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../index.css';
import {
  ProfileOutlined,
  InfoCircleOutlined,
  SearchOutlined,
  ProductOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
const items = [
  { key: '1', icon: <HomeOutlined />, label:<Link to='/'>Home</Link>},
  { key: '2', icon: <SearchOutlined />, label: <Link to='/search'>Search</Link> },
  { key: '3', icon: <InfoCircleOutlined/>, label:<Link to='/about'>About</Link> },
  {
    key: '4',
    label: <Link to='/products'>Products</Link>,
    icon: <ProductOutlined />,
  },
  {
    key: '5',
    label: <Link to='/profile'>profile</Link>,
    icon: <ProfileOutlined />,
  },
];
const Slidebar= () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};
export default Slidebar;