import { HomeOutlined, EditOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, ConfigProvider, Space } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (<ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#54428E',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#FFFFFF',
      },
    }}
  >
  
    <>
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="h" icon= {<HomeOutlined />}>
       <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="search">
          <SearchBar />
        </Menu.Item>

      <Menu.Item key="r" icon= {<EditOutlined />} style={{ marginLeft: 'auto' }}>
        <Link to="/register">Register</Link>
      </Menu.Item>

      <Menu.Item key="l" icon= {<UserOutlined />} >
        <Link to="/login">Login</Link>
      </Menu.Item>
     </Menu>
     <Outlet/>
    </>
   
  </ConfigProvider>
    
   
  )
};
export default Header;