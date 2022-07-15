import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { IoCloseCircleSharp } from 'react-icons/io5'
import '../Entry/Entry.css'
function Entry({ setData, data, column }) {
    const [companyState, setCompanyState] = useState('')
    const [positionState, setPositionState] = useState('')
    const [salaryState, setSalaryState] = useState('')
    // const [interviewState, setInterviewState] = useState('')
    const [modalState, setModal] = useState(false)

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newArray = {
            id: Math.random(),
            company: companyState,
            position: positionState,
            salary: salaryState,
            // morningShift: true,
            // position: 'Full Stack Developer',
            // interview: interviewState,
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
                            Create Entry
                        </div>
                        <div className='entry__close'>
                            <IoCloseCircleSharp size={24} onClick={() => setModal(false)} />
                        </div>
                    </div>
                    <form className='entry__form' onSubmit={(e) => onSubmitHandler(e)}>
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
                        <button className='entry__button' type='submit'>Create Entry</button>


                    </form>
                </div>
            </ReactModal>

            <button className='Entry__button' onClick={() => setModal(true)}>Add Entry</button>
        </>
    )
}

export default Entry