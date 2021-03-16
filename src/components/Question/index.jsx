import React from 'react';
import Alternative from '../Alternative';

const Question = (props) => {
  const {question, alternatives} = props.question;
  const {nextQuestion} = props;
  return (
    <div>
    <p className="text-base mb-8">
      {question}
    </p>
    <ul>
      {
        alternatives.map((alternative, index)=><Alternative key={index} alternative={alternative}/>)
      }
    </ul>
    <div className="flex justify-end mt-20">
      <button onClick={nextQuestion} className="bg-appSkyBlue rounded-xl text-appBlue text-base px-5 py-2">Siguiente</button>
    </div>
  </div>

  )
}

export default Question;