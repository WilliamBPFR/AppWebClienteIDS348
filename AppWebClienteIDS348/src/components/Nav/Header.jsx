import { HomeOutlined, EditOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Menu, ConfigProvider, Space } from 'antd';
import { useState, useEffect } from 'react';
import { Outlet, Link,useNavigate,useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '@/assets/logo.jpg'; 
import Cookies from 'js-cookie';
import { VerificarUsuarioLogin } from '@/services/usuarioService';
import { TraerUsuario } from  '@/services/usuarioService';

const Header = () => {
  const location = useLocation(); // Utiliza useLocation para obtener la ubicación actual
  const [current, setCurrent] = useState('h');
  const [searchValue, setSearchValue] = useState(''); // Estado para almacenar el valor de búsqueda
  const navigate = useNavigate();

  const [userCorreo, setUserCorreo] = useState('');
  const [loggeado, setloggeado] = useState(false);

  useEffect(() => {
      const cookie = Cookies.get('miCookie');
      if(cookie == undefined || cookie == "" || cookie == null){
        setloggeado(false);
        if( location.pathname.includes("/shoppingCart") ||   location.pathname.includes("/checkOut")  ){
          console.log("entreee a verificacion de usuario:aaaaaaaaaaaaaaaaaa " + cookie)
          navigate('/login');
        }
      }
      else{
     console.log("entreee a verificacion de usuario: " + cookie)
      VerificarUsuarioLogin(cookie).
      then(response => {
        console.log(response.data)
          if(response.data.usuario_logueado != true)
          {
            setloggeado(false);
          }
          else{
            setloggeado(true);
          }
    })
  }
  }, [location.pathname]);

  useEffect(() => {
    if(loggeado == true){
      const cookie =Cookies.get('miCookie');
      TraerUsuario(cookie)
      .then(response => {
        console.log("entreee a traer usuario: " + cookie)
        console.log(response)
          if(response.data.usuario_logueado == true)
          {
            setUserCorreo(response.data.email);
          }
          else{
            if(location.pathname != "/" && location.pathname != "/login" && location.pathname != "/register"&& location.pathname != "/product"){
            setloggeado(false);
            Cookies.remove('miCookie');
            navigate('/login');

            }
          }
        });
        }
  }, [loggeado]);

useEffect(() => {
  if(searchValue != undefined && searchValue != '' && searchValue != null){
    navigate(`/?search=${searchValue}`);
  }
}, [searchValue]);

  const handleSearch = (value) => {
    console.log("acrtulaikdcnkascxkansxkmasnxk")
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
  
  {loggeado ? (
    <Menu.Item key="p">
      <Link to="/">{userCorreo }</Link>
    </Menu.Item>
  ) : (
    <>
      <Menu.Item key="r" icon={<EditOutlined />} style={{ marginLeft: 'auto' }}>
        <Link to="/register">Register</Link>
      </Menu.Item>

      <Menu.Item key="l" icon={<UserOutlined/>}>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </>
  )}

  <Menu.Item key="S" icon={<ShoppingCartOutlined/>}>
    <Link to="/shoppingCart"></Link>
  </Menu.Item>
  </Menu>
<Outlet />
  </>
   
  </ConfigProvider>
    
   
  )
};
export default Header;