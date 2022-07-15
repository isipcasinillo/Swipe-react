import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { IoCloseCircleSharp } from 'react-icons/io5'
import '../Edit/Edit.css'
import { FaEdit } from 'react-icons/fa'
function Edit({ props, data, setData, keyid }) {
    const [modalState, setModalState] = useState(false)
    const { position, salary, company, interview } = props || {}
    // const currentInterview = new Date(interview).toISOString().split('T')[0]

    const [positionState, setPositionState] = useState(position)
    const [salaryState, setSalaryState] = useState(salary)
    const [companyState, setCompanyState] = useState(company)
    // const [interviewState, setInterviewState] = useState(currentInterview)

    const changeDataOnTime = (e) => {
        e.preventDefault()
        const remainingItem = data.filter(entry => entry.id !== keyid)
        const changedItem = data.filter(entry => entry.id === keyid)
        changedItem[0].position = positionState;
        changedItem[0].company = companyState;
        // changedItem[0].interview = interviewState
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
            <ReactModal
                isOpen={modalState}
                contentLabel="Modal"
                ariaHideApp={false}
                className="entry-modal"
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backdropFilter: ('blur(5px)'),
                    }
                }}>
                <div className='entry__wrapper'>
                    <div className='entry__first'>
                        <div className='entry__title'>
                            Edit Entry
                        </div>
                        <div className='entry__close'>
                            <IoCloseCircleSharp size={24} onClick={() => setModalState(false)} />
                        </div>
                    </div>
                    <form className='entry__form' onSubmit={(e) => changeDataOnTime(e)}>
                        <div className='entry__input__container'>
                            <div className='entry__input'>
                                <label>Company</label>
                                <input type="text" name="company" placeHolder='Intuit' value={companyState} onChange={(e) => setCompanyState(e.target.value)} required />
                            </div>
                            <div className='entry__input'>
                                <label>Position</label>
                                <input type="text" name="position" placeHolder='Application Developer' value={positionState} onChange={(e) => setPositionState(e.target.value)} required /></div>
                            <div className='entry__input'>
                                <label>Salary</label>
                                <input type="text" name="salary" placeHolder='$55,000' value={salaryState} onChange={(e) => setSalaryState(e.target.value)} required />
                            </div>
                        </div>
                        {/* <label>Interview date:</label>
                    <input type="date" name="interview" value={interviewState} onChange={(e) => setInterviewState(e.target.value)} required /> */}
                        <button className='entry__button' type='submit'>Update</button>


                    </form>
                </div>
            </ReactModal>
        </div>

    )
}

export default Edit