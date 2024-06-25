import React from 'react';
import './sideBar.css';
import ferme from '../../assets/ferme.png'
import { useNavigate } from 'react-router-dom';

export default function SideBar({ isOpen, toggleSidebar }) {
    const navige=useNavigate()
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img className="meenu" src={ferme} alt='menu' onClick={toggleSidebar}/>
       
      <ul>
        <li onClick={()=>{navige('/client')}} >Dashboard</li>
        <li onClick={()=>{navige('/clientreservation')}}>Reservation</li>
        <li onClick={()=>{navige('/profile')}}>Profile</li>
      </ul>
    </div>
  )
}
