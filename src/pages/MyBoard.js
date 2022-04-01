import React from 'react';
import "./styles.css";
import BoardTable from '../components/Board/BoardTable';


/**
 * This is the page where all the logged in user will see all his/her published cards
 * 
 * @returns 
 */

function MyBoard() {
  return (
    <>
        <div className=''>
            {/* This will probably have a prop passed so the board can retrienve the users collections */}
            <BoardTable /> 
        </div>
    </>
  )
}

export default MyBoard