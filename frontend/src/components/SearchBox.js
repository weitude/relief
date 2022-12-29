import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);
const SearchBox = () => (
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
export default SearchBox;