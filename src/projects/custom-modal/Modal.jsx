import React from 'react'
import { useEffect } from 'react';

const Modal = ({ setShow }) => {

    useEffect(() => {
        function onKeyDown(e) {
            if (e.keyCode === 27) {
               setShow(false);
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        }
    })

    function handleClose(e) {
        const backDrop = document.getElementById("modalBackDrop");
        const closeBtn = document.getElementById("closeButton");

        if (e.target === backDrop || e.target === closeBtn) {
            setShow(false);
        }

    }

    return (
        <div className='modalBackDrop' id='modalBackDrop' onClick={handleClose}>
            <div className='modalContent'>
                <div className='modalHeader'>
                    <span className='modalTitle'>Modal Demo</span>
                    <span className="closeButton" id='closeButton' onClick={handleClose}> X </span>
                </div>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nisi
                    doloribus id? Perferendis magnam, suscipit aperiam culpa iste sed ut
                    excepturi qui facere, cupiditate voluptatibus, aut minima corporis
                    quia sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing
                    elit. Optio nobis saepe suscipit neque, debitis doloribus sequi minus
                    quam asperiores ducimus fugit aliquam, quos dignissimos officia libero
                    eos cupiditate blanditiis! Iure.
                </span>
            </div>
        </div>
    )
}

export default Modal