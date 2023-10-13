import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Product from './pages/Poduct';
import Header from './components/Nav/Header';
import Filtro from './components/filter/Filter';
import ShoppingCart from './pages/ShoppingCart';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} params= {{search: ""}} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="product" element={<Product />} params= {{id: ""}}/>
      <Route path="shoppingCart" element={<ShoppingCart />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
