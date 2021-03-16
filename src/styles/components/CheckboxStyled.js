import styled from 'styled-components';

const CheckboxStyled = styled.span`
  background: #141a33;
  border: 2px solid #555b78;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  .dash-1{
    display: none;
  }
  .dash-2{
    display: none;
  }
  &.checked{
    background: #0fc69a;
    border: 2px solid #0fc69a;
    .dash-1{
      background: white;
      display: block;
      width: 4px;
      height: 2px;
      position: absolute;
      transform: rotate(45deg);
      top: 9px;
      left: 4px;
    }
    .dash-2{
      background: white;
      display: block;
      width: 10px;
      height: 2px;
      position: absolute;
      transform: rotate(-45deg);
      right: 1px;
      top: 7px;
    }
  }
  
`;

export default CheckboxStyled;