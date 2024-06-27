import React from 'react';
import './Modal.css'
const Modal = ({ show, onClose, item }) => {
  if (!show) {
    return null;
  }

  const { cover, category, ava, location, name, price, type } = item;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <div className='category flex'>
            <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
            <span style={{ background: ava === "Available" ? "#25b5791a" : "#ff98001a", color: ava === "Available" ? "#25b579" : "#ff9800" }}> {ava} </span>
          </div>
          <h4>{name}</h4>
          <p>
            <i className='fa fa-location-dot'></i> {location}
          </p>
        </div>
        <div className='button flex'>
          <div>
            <button className='btn2'>{price}</button> <label htmlFor=''></label>
          </div>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
