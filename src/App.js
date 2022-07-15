
import React, { useState } from 'react';
import DataMock from './Utils/DataMock'
import './App.css';
import Entry from './Components/Entry/Entry';
import ColumnList from './Components/ColumnList/ColumnList';
function App() {
  const [data, setData] = useState(DataMock)
  return (
    <>
      <div className='columnContainer'>
        <ColumnList props={{ data, setData }} columnName='Applied'>
          <Entry data={data} setData={setData} column={'Applied'} />
        </ColumnList>
        <ColumnList props={{ data, setData }} columnName='Interview'>
          <Entry data={data} setData={setData} column={'Intreview'} />
        </ColumnList>
        <ColumnList props={{ data, setData }} columnName='Decision'>
          <Entry data={data} setData={setData} column={'Decision'} />
        </ColumnList>
      </div>

    </>
  );
}

export default App;
