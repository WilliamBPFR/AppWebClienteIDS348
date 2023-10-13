import { HomeOutlined, EditOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, ConfigProvider, Space } from 'antd';
import { useState, useEffect } from 'react';
import { Outlet, Link,useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '@/assets/logo.jpg'; 


const Header = () => {
  const [current, setCurrent] = useState('h');
  const [searchValue, setSearchValue] = useState(''); // Estado para almacenar el valor de búsqueda
  const navigate = useNavigate();

useEffect(() => {
  navigate(`/?search=${searchValue}`);
}, [searchValue]);

  const handleSearch = (value) => {
    setSearchValue(value); // Almacena el valor de búsqueda en el estado
  };

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const accion =() =>{
    setSearchValue('');
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
       <Menu.Item key="h" style={{ marginLeft: 'auto' }}>
          <Link onClick={accion} to="/">
            <img src={logo} alt="Home" />
          </Link>
        </Menu.Item>

      <Menu.Item key="search">
          <SearchBar onSearch={handleSearch}/>
        </Menu.Item>

      <Menu.Item key="r" icon= {<EditOutlined />} style={{ marginLeft: 'auto' }}>
        <Link to="/register">Register</Link>
      </Menu.Item>

      <Menu.Item key="l" icon= {<UserOutlined />} >
        <Link to="/login">Login</Link>
      </Menu.Item>

      <Menu.Item key="S" icon= {<ShoppingCartOutlined />} >
        <Link to="/shoppingCart"></Link>
      </Menu.Item>

     </Menu>
     <Outlet/>
    </>
   
  </ConfigProvider>
    
   
  )
};
export default Header;