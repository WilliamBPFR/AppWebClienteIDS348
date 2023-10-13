import React from "react";
import { Input, Space, ConfigProvider } from "antd";

const { Search } = Input;

const SearchBar = () => {
  const onSearch = (value) => console.log(value);

  return (
    <ConfigProvider
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
      
        <div className="search" id="searchbar">
          <div >
            <Search
              type="primary"
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
              className="custom-search" // Aplica tu clase CSS personalizada
            />
          </div>
        </div>
    </ConfigProvider>
  );
};

export default SearchBar;
