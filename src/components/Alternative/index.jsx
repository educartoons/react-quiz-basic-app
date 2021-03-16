import React from 'react';
import CheckboxStyled from '../../styles/components/CheckboxStyled';

const Alternative = (props) =>{
  return(
    <li className="border-2 border-appTransparent flex justify-between rounded-2xl py-3 px-4 mb-4">
        <p className="text-gray-400">{props.alternative}</p>
        <CheckboxStyled>
          <div className="dash-1"></div>
          <div className="dash-2"></div>
        </CheckboxStyled>
      </li>
  )
}

export default Alternative;