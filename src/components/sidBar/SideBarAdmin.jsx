import React from 'react';
import './sideBar.css';
import ferme from '../../assets/ferme.png'
import { useNavigate } from 'react-router-dom';

export default function SideBarAdmin({ isOpen, toggleSidebar }) {
    const navige=useNavigate()
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <img className="meenu" src={ferme} alt='menu' onClick={toggleSidebar}/>
       
      <ul>
        <li onClick={()=>{navige('/dash')}} >Dashboard</li>
        <li onClick={()=>{navige('/users')}}>Users List</li>
        <li onClick={()=>{navige('/profile')}}>Profile</li>
      </ul>
    </div>
  )
}
