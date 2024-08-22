import React, { useState } from 'react'
import DataSharingChild from './DataSharingChild';

const DataSharingParent = () => {
    let [color, setColor] = useState('black');
    const chooseColor = (color) => {
        setColor(color);
    }
  return (
    <div>
        <div>DataSharingParent</div>
        <div>
            Choosen Color is {color}
            <DataSharingChild chooseColor={chooseColor}/>
        </div>
    </div>
    
  )
}

export default DataSharingParent