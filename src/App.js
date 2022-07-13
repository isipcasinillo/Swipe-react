import logo from './logo.svg';
import React, { useState } from 'react';
import DataMock from './Utils/DataMock'
import './App.css';
import Item from './Components/Item/Item';
import Entry from './Components/Entry/Entry';

function App() {
  const [data, setData] = useState(DataMock)
  const deleteHandler = (id) => {
    const newArray = data.filter(entry => entry.id !== id)
    setData(newArray)
  }
  console.log(data)
  return (
    <>
      <div className='columnContainer'>
        <div className='columnList'>
          {data && data.filter(entry => entry.status === 'Applied').map((entry) => {
            return <Item
              entry={{ entry }}
              setData={setData}
              data={data}
              status={entry.status}
              keyid={entry.id}
              key={entry.id}
              deleteHandler={deleteHandler}
              company={entry.company}
            />
          })}
          <Entry data={data} setData={setData} column={'Applied'} />
        </div>
        <div className='columnList'>
          {data && data.filter(entry => entry.status === 'Interview').map((entry) => {
            return <Item
              setData={setData}
              data={data}
              status={entry.status}
              key={entry.id}
              keyid={entry.id}
              deleteHandler={deleteHandler}
              company={entry.company}
            />
          })}
          <Entry data={data} setData={setData} column={'Interview'} />
        </div>
        <div className='columnList'>
          {data && data.filter(entry => entry.status === 'Decision').map((entry) => {
            return <Item
              setData={setData}
              data={data}
              status={entry.status}
              key={entry.id}
              keyid={entry.id}
              deleteHandler={deleteHandler}
              company={entry.company}
            />
          })}
          <Entry data={data} setData={setData} column={'Decision'} />
        </div>
      </div>

    </>
  );
}

export default App;
