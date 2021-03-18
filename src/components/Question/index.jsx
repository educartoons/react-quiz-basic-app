import React, {useState, useEffect} from 'react';
import Alternative from '../Alternative';

const Question = (props) => {
  const {question, alternatives, correntAnswer} = props.question;
  const [checkedAlternative, setCheckedAlternative] = useState(null);
  const {nextQuestion} = props;

  useEffect(()=>{
    setCheckedAlternative(null);
  }, [question])

  return (
    <div>
    <p className="text-base mb-8">
      {question}
    </p>
    <ul>
      {
        alternatives.map((alternative, index)=><Alternative key={index} index={index} alternative={alternative} checkedAlternative={checkedAlternative} setCheckedAlternative={setCheckedAlternative}/>)
      }
    </ul>
    <div className="flex justify-end mt-20">
      {
        checkedAlternative===null ? <button disabled={true} className="bg-gray-500 cursor-not-allowed rounded-xl text-appBlue text-base px-5 py-2">{props.indexCurrentQuestion+1===props.totalQuestions ? 'Calcular nota' : 'Siguiente'}</button> : <button onClick={()=>nextQuestion(checkedAlternative, correntAnswer)} className="bg-appSkyBlue rounded-xl text-appBlue text-base px-5 py-2">{props.indexCurrentQuestion+1===props.totalQuestions ? 'Calcular note' : 'Siguiente'}</button>
      }
      
    </div>
  </div>

  )
}

export default Question;