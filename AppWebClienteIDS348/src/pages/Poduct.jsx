import React from 'react'
import { Button, ConfigProvider, Space } from 'antd';
import ProductPhotos from '@/components/ProductPhotos';

const Product = () => (
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
    <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px', paddingLeft: '10px' }}>
      <div>
      <ProductPhotos />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '200px', paddingLeft: '10px' }}>
      <Space>
        <Button type="primary">Comprar ahora</Button>
        <Button>Agregar al carrito</Button>
      </Space>
      </div>

    </div>

    </div>
  </ConfigProvider>
 
)

export default Product