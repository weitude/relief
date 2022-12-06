import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);
const SearchBar = () => (
  <Space direction="vertical">
    <Search
      placeholder="Search for what?"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  </Space>
);
export default SearchBar;