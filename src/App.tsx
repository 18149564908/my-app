import React, { useEffect } from 'react';
import logo from './logo.svg';
import stores from './stores';
import { Input } from 'antd';

const App: React.FC = () => {
  const todos = stores.useStore('todos');
  console.log(todos);
  const { dataSource, fetchData, add, remove } = todos;
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  function handleClick() {
    
  }
  return (
    <div className='App'>
      <h1>聊天吧！</h1>
      <ul>
        {dataSource.map((item, index) => {
          return (
            <li key={index} onClick={handleClick}>
              {item.name}
            </li>
          )
        })}
      </ul>
      <Input />
    </div>
  );
}

export default App;
