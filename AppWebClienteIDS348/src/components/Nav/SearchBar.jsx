import React from "react";
import {Input, Space, ConfigProvider} from "antd";
const {Search} = Input;

const SearchBar = () => {
const onSearch = value => console.log(value);

return(
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#54428E',
        borderRadius: 2,
      },
    }}
  >
    <Space> 
    <div className="search" id="searchbar">
    <div className="searchInputs">    
      <Search type="primary"
        placeholder="input search text" 
        onSearch={onSearch} 
        enterButton
      />
    </div>
    </div>
    </Space>
  </ConfigProvider>
)
};

export default SearchBar;