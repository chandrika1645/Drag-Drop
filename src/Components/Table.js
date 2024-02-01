import React from 'react'
import '../Styles/Table.css'


const Table = () => {
  return (
    <table className="appliance-table">
      <thead>
        <tr>
          <th>Appliances</th>
          <th>Quantity</th>
          <th>Circuit Style</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bells</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Horns</td>
          <td></td>
          <td></td>
          
        </tr>
        <tr>
          <td>Chimes</td>
          <td></td>
          <td></td>
          
        </tr>
        <tr>
          <td>Strobes</td>
          <td></td>
          <td></td>
          
        </tr>
        <tr>
          <td>Speakers</td>
          <td></td>
          <td></td>
          
        </tr>
      </tbody>
    </table>
  )
}

export default Table