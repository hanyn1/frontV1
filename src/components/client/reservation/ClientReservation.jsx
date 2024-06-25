import React from 'react';
import RecentCard from "../../home/recent/RecentCard";
import { useState } from "react";
import SideBar from '../../sidBar/SideBar';
import menu from "../../../assets/menu.png";
import logo1 from "../../../assets/logo1.png";
import "./ClientReservation.css"; // Import custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function ClientReservation() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };
    const handleLogout = () => {
        // Implement your logout logic here
      };
  return (
    <div className='container-fluid p-0'>
        <img src={menu} alt='menu' className='menu img-fluid' onClick={toggleSidebar} />
      <div className="position-relative">
        <img src={logo1} alt="logo" className="logo1 img-fluid" />
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </div>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="reservation-title">
        Reservation List
      </div>
    </div>
  )
}
