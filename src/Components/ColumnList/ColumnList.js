import React from 'react'
import Item from '../Item/Item'
import Entry from '../Entry/Entry'
import { useDrop } from 'react-dnd'
import '../ColumnList/ColumnList.css'
import { ItemTypes } from '../../Utils/ItemType'
function ColumnList({ props, columnName }) {
    const { data, setData } = props

    const DropToColumn = (_id) => {
        const indexItem = data.findIndex(entry => entry.id === _id) // returns index of spliced
        const remainingItem = data.filter(entry => entry.id !== _id)
        const removedItem = data.splice(indexItem, 1)
        console.log(removedItem)
        removedItem[0].status = columnName
        const combinedData = remainingItem.concat(removedItem)
        setData(combinedData)

    }

    const [{ addedProps }, drop] = useDrop({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => DropToColumn(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })
    const deleteHandler = (id) => {
        const newArray = data.filter(entry => entry.id !== id)
        setData(newArray)
    }
    return (
        <>
            <div className='columnList' ref={drop}>
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