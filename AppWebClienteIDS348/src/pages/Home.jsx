import { Button, ConfigProvider, Space } from 'antd';
import React from 'react';

const Home = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#54428E',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#EBEBEB',
      },
    }}
  >
    <Space>
      <Button type="primary">Comprar ahora</Button>
      <Button>Agregar al carrito</Button>
    </Space>
  </ConfigProvider>
);

export default Home;