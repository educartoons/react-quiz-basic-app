import React from 'react';
import CheckboxStyled from '../../styles/components/CheckboxStyled';


const App = () => {
  return (
   <div className="bg-appBlue h-screen text-appGrey">
      <div className="container mx-auto px-6 py-7">
      <header>
        <h3 className="font-semibold mb-3 text-appTransparent ">Examen de historia</h3>
        <h2 className="border-dashed font-semibold mb-8 text-appGrey text-2xl">Pregunta 06/20</h2>
      </header>
      <div>
        <p className="text-base mb-8">Que dia es la independencia del Peru?</p>
        <ul>
          <li className="border-2 border-appTransparent flex justify-between rounded-2xl py-3 px-4 mb-4">
            <p className="text-gray-400">28, Julio de 1921</p>
            <CheckboxStyled>
              <div className="dash-1"></div>
              <div className="dash-2"></div>
            </CheckboxStyled>
          </li>
          <li className="border-2 border-appTransparent flex justify-between rounded-2xl py-3 px-4 mb-4">
            <p>28, Julio de 1921</p>
            <CheckboxStyled>
              <div className="dash-1"></div>
              <div className="dash-2"></div>
            </CheckboxStyled>
          </li>
          <li className="border-2 border-appTransparent flex justify-between rounded-2xl py-3 px-4 mb-4">
            <p>28, Julio de 1921</p>
            <CheckboxStyled>
              <div className="dash-1"></div>
              <div className="dash-2"></div>
            </CheckboxStyled>
          </li>
          <li className="border-2 border-appTransparent flex justify-between rounded-2xl py-3 px-4 mb-4">
            <p>28, Julio de 1921</p>
            <CheckboxStyled className="checked">
              <div className="dash-1"></div>
              <div className="dash-2"></div>
            </CheckboxStyled>
          </li>
        </ul>
        <div className="flex justify-end mt-20">
          <button className="bg-appSkyBlue rounded-xl text-appBlue text-base px-5 py-2">Siguiente</button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default App;