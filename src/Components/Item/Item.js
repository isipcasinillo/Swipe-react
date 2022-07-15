import React, { useState } from 'react'
import Edit from '../Edit/Edit'
import { FaTrash } from 'react-icons/fa'
import '../Item/Item.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../../Utils/ItemType'
function Item({ deleteHandler, data, setData, keyid }) {
    const result = data?.find(item => item.id === keyid)
    // console.log(result)
    const [{ extraProps }, drag] = useDrag({
        item: {
            id: keyid,
            columnName: result.status
        },
        type: ItemTypes.CARD,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    })


    const changeStatusHandler = (e) => {
        const remainingItem = data.filter(entry => entry.id !== result.id)
        const removedItem = data.filter(entry => entry.id === result.id)
        removedItem[0].status = e.target.value
        const combinedData = removedItem.concat(remainingItem)
        setData(combinedData)
    }

    return (
        <div key={result.keyid} className="item__card" ref={drag}>
            {data &&
                <div className='item__container'>
                    <div className='item__first'>
                        <div className='item__company'>{result.company}</div>
                        <div className='item__salary'>${result.salary}</div>
                    </div>

                    <div className='item__position'>{result.position}</div>

                    {/* {
                        result.interview ? <div>{result.interview}</div> : <div></div>
                    } */}
                    <div className='item__third'>
                        <select className='item__select' defaultValue={result.status} onChange={(e) => changeStatusHandler(e)}>
                            <option value="Applied" >Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Decision" >Decision</option>
                        </select>
                        <div className='item__buttons'>
                            <Edit props={result} setData={setData} data={data} keyid={result.id} />
                            <div className='item__delete'>
                                <FaTrash size={16} onClick={() => deleteHandler(result.id)} />
                            </div>

                            {/* <button className='item__button' onClick={() => deleteHandler(result.id)}>D</button> */}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Item