import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const Gain = () => {
  return (
    <>
    <h2 className='text-center display-3'>  Weight Gain Chart </h2>
    <table>
        <thead>
            <tr>
                <th> Day </th>
                <th> Breakfast (8 AM) </th>
                <th> Mid-Morning Snack (11 AM) </th>
                <th> Lunch (1:30 PM) </th>
                <th> Evening Snack (5 PM) </th>
                <th> Dinner (8 PM) </th>

            </tr>
            
        </thead>
    </table>

    </>
  )
}

export default Gain
