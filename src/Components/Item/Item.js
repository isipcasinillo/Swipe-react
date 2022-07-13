import React, { useState } from 'react'
import Edit from '../Edit/Edit'
import '../Item/Item.css'
function Item({ deleteHandler, company, keyid, data, setData, status }) {

    const result = data.find(item => item.id === keyid)
    const changeStatusHandler = (e) => {
        const remainingItem = data.filter(entry => entry.id !== keyid)
        const removedItem = data.filter(entry => entry.id === keyid)
        removedItem[0].status = e.target.value
        const combinedData = removedItem.concat(remainingItem)
        setData(combinedData)
    }

    return (
        <div key={keyid} className="item__card">
            {data &&
                <>
                    <div>{company}</div>
                    <div>{result.position}</div>
                    <div>${result.salary}</div>
                    {
                        result.interview ? <div>{result.interview}</div> : <div></div>
                    }
                    <div>
                        <button onClick={() => deleteHandler(keyid)}>Delete Entry</button>
                    </div>
                    <div>
                        <select defaultValue={status} onChange={(e) => changeStatusHandler(e)}>
                            <option value="Applied" >Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Decision" >Decision</option>
                        </select>
                    </div>

                </>
            }
            <Edit props={result} setData={setData} data={data} keyid={keyid} />
        </div>
    )
}

export default Item