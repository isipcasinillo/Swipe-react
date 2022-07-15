import React, { useState } from 'react'
import ReactModal from 'react-modal'
import '../Edit/Edit.css'
import { FaEdit } from 'react-icons/fa'
function Edit({ props, data, setData, keyid }) {
    const [modalState, setModalState] = useState(false)
    const { position, salary, company, interview } = props || {}
    const currentInterview = new Date(interview).toISOString().split('T')[0]

    const [positionState, setPositionState] = useState(position)
    const [salaryState, setSalaryState] = useState(salary)
    const [companyState, setCompanyState] = useState(company)
    const [interviewState, setInterviewState] = useState(currentInterview)
    const positionChangeHandler = (e) => {
        e.preventDefault()
        setPositionState(e.target.value)
    }
    const companyChangeHandler = (e) => {
        e.preventDefault()
        setCompanyState(e.target.value)
    }
    const salaryChangeHandler = (e) => {
        e.preventDefault()
        setSalaryState(e.target.value)
    }
    const interviewChangeHandler = (e) => {
        e.preventDefault()
        setInterviewState(e.target.value)
    }

    const changeDataOnTime = (e) => {
        e.preventDefault()
        const remainingItem = data.filter(entry => entry.id !== keyid)
        const changedItem = data.filter(entry => entry.id === keyid)
        changedItem[0].position = positionState;
        changedItem[0].company = companyState;
        changedItem[0].interview = interviewState
        changedItem[0].salary = salaryState
        const combinedData = changedItem.concat(remainingItem)
        setData(combinedData)
        setModalState(false)
    }
    return (
        <div className='Edit__button'>
            <div>
                <FaEdit size={20} onClick={() => setModalState(true)} />
            </div>

            {/* <button className='Edit__button' >E</button> */}
            <ReactModal
                isOpen={modalState}
                contentLabel="Modal"
                ariaHideApp={false}
                className="edit-modal">
                <form onSubmit={(e) => changeDataOnTime(e)}>
                    <input type='text' value={companyState} onChange={(e) => companyChangeHandler(e)} />
                    <input type='text' value={positionState} onChange={(e) => positionChangeHandler(e)} />
                    <input type='text' value={salaryState} onChange={(e) => salaryChangeHandler(e)} />
                    {interviewState &&
                        <input type='date' defaultValue={interviewState} onChange={(e) => interviewChangeHandler(e)} />
                    }
                    <button type='submit'>Accept Changes</button>
                </form>
                <button onClick={() => setModalState(false)}>Close Modal</button>
            </ReactModal>
        </div>

    )
}

export default Edit