import React from 'react'

const DataSharingChild = ({chooseColor}) => {
    const handleChange = (event) => {
        chooseColor(event.target.value)
    }
  return (
    <div>
<div>DataSharingChild</div>
<div>
    <select onChange={handleChange}>
        <option>Red</option>
        <option>Blue</option>
        <option>Orange</option>
        <option>Green</option>
    </select>
</div>
    </div>
    
  )
}

export default DataSharingChild