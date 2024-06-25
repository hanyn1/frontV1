import React from 'react';
import RecentCard from "../home/recent/RecentCard";
import { useState } from "react";
import SideBar from '../sidBar/SideBar';
import menu from "../../assets/menu.png";
import logo1 from "../../assets/logo1.png";
import "./client.css"; // Import custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Client() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleLogout = () => {
    // Implement your logout logic here
  };
  const handleFilter = (e) => {
    e.preventDefault();
    // Implement your filter logic here
  };

  return (
    <div className="container-fluid p-0" >
      <img src={menu} alt='menu' className='menu img-fluid' onClick={toggleSidebar} />
      <div className="position-relative">
        <img src={logo1} alt="logo" className="logo1 img-fluid" />
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </div>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="title">
        Offers List
      </div>
      <div className="filter">
      <form onSubmit={handleFilter}>
  <label>
    Availability:
    <select name="availability">
      <option value="">Select Availability</option>
      <option value="available">Available</option>
      <option value="not-available">Not Available</option>
    </select>
  </label>
  <label>
    Localization:
    <input type="text" name="localization" value="" />
  </label>
  <label>
    Category:
    <select name="category">
      <option value="">Select Category</option>
      <option value="for-sale">For Sale</option>
      <option value="for-rent">For Rent</option>
    </select>
  </label>
  <label>
    Service:
    <select name="service">
      <option value="">Select Service</option>
      <option value="family-house">Family House</option>
      <option value="office">Office</option>
      <option value="apartment">Apartment</option>
    </select>
  </label>
  <button type="submit" className="search-btn">
  <FontAwesomeIcon icon={faSearch} />
</button>
</form>

      </div>
      <div className='container recent'>
      <RecentCard />
      </div>
    </div>
  );
}
