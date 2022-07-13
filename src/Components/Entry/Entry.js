import React, { useState } from 'react'
import ReactModal from 'react-modal'

function Entry({ setData, data, column }) {
    const [companyState, setCompanyState] = useState('')
    const [positionState, setPositionState] = useState('')
    const [salaryState, setSalaryState] = useState('')
    const [interviewState, setInterviewState] = useState('')
    const [modalState, setModal] = useState(false)

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newArray = {
            id: Math.random(),
            company: companyState,
            description: positionState,
            salary: salaryState,
            // morningShift: true,
            // position: 'Full Stack Developer',
            interview: interviewState,
            status: column

        }
        setData([...data, newArray])
        setModal(false)
    }
    return (
        <>
            <ReactModal
                isOpen={modalState}
                contentLabel="Modal"
                ariaHideApp={false}
                className="edit-modal">
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <label>Company name:</label>
                    <input type="text" name="company" value={companyState} onChange={(e) => setCompanyState(e.target.value)} required />
                    <label>Description:</label>
                    <input type="text" name="description" value={positionState} onChange={(e) => setPositionState(e.target.value)} required />
                    <label>Salary:</label>
                    <input type="text" name="salary" value={salaryState} onChange={(e) => setSalaryState(e.target.value)} required />
                    <label>Interview date:</label>
                    <input type="date" name="interview" value={interviewState} onChange={(e) => setInterviewState(e.target.value)} required />
                    <button type='submit'>Create Entry</button>
                </form>
                <button onClick={() => setModal(false)}>Close Modal</button>
            </ReactModal>
            <button onClick={() => setModal(true)}>Add Entry</button>
        </>
    )
}

export default Entry