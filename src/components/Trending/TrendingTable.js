import React from 'react';
import TrendingNews from './TrendingNews';
import "./TrendingTable.css";

function TrendingTable() {
  return (
    <div className='trendingtable'>
        <div className='trendingtable__top'>
            <h4>Trending</h4>
        </div>

        <div>
            <TrendingNews />
        </div>

        
    </div>
  )
}

export default TrendingTable