import React from 'react';
import CheckboxStyled from '../../styles/components/CheckboxStyled';

const Alternative = (props) =>{
  const handleSelect = () => {
    props.setCheckedAlternative(props.index);
  }
  return(
    <li onClick={handleSelect} className="border-2 border-appTransparent cursor-pointer	 flex justify-between rounded-2xl py-3 px-4 mb-4">
        <p className="text-gray-400">{props.alternative}</p>
        <CheckboxStyled className={props.checkedAlternative===props.index ? 'checked' : ''}>
          <div className="dash-1"></div>
          <div className="dash-2"></div>
        </CheckboxStyled>
      </li>
  )
}

export default Alternative;