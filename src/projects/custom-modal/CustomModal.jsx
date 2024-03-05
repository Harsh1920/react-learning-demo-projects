import React, { useState } from 'react'
import Modal from './Modal';
import './Style.css'

const CustomModal = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>
        Custom Modal
      </h3>
      <button onClick={(e) => { e.stopPropagation(); setShow(true) }}>Open Modal</button>

      {show && <Modal setShow={setShow}/>}
    </div>
  )
}

export default CustomModal