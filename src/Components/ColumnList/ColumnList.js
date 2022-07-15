import React from 'react'
import Item from '../Item/Item'
import Entry from '../Entry/Entry'
import '../ColumnList/ColumnList.css'
function ColumnList({ props, columnName }) {
    console.log(props, columnName)

    const { data, setData } = props

    const deleteHandler = (id) => {
        const newArray = data.filter(entry => entry.id !== id)
        setData(newArray)
    }
    return (
        <>
            <div className='columnList'>
                <div className='column__title'>
                    {columnName}
                </div>
                <Entry data={data} setData={setData} column={columnName} />
                <div className='column__container'>
                    {data && data.filter(entry => entry.status === columnName).map((entry) => {
                        return <Item
                            entry={{ entry }}
                            setData={setData}
                            data={data}
                            keyid={entry.id}
                            key={entry.id}
                            deleteHandler={deleteHandler}
                        />
                    })}
                </div>
            </div>

        </>
    )
}

export default ColumnList