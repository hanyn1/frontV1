import React from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, ava, location, name, price, type } = val
          return (
            <div className='box shadow' key={index} onClick={'/about'}>
              <div className='img'>
                <Link to="/about">
                <img src={cover} alt='' />
                </Link>
                
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
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
