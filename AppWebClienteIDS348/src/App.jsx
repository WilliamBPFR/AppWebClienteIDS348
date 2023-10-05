import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Product from './pages/Poduct';
import Header from './components/Nav/Header';
import "./index.css"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="product" element={<Product />} />
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
