import React, {useState, useEffect} from 'react';
import Question from '../Question';

const data = [
  {
    question: 'Cuando es el dia de la independencia del Peru',
    alternatives: [
      '28 de Julio de 1981',
      '28 de Julio de 1881',
      '28 de Julio de 1821',
      '28 de Julio de 1882',
    ],
    correntAnswer: 2
  },
  {
    question: 'Cual es el lago mas alto de Peru?',
    alternatives: [
      'Titicaca',
      'Aricota',
      'Eduar',
      'Jorge',
    ],
    correntAnswer: 2
  },
  {
    question: 'Cuando es el dia de la independencia del Peru 3',
    alternatives: [
      '28 de Julio de 1981',
      '28 de Julio de 1881',
      '28 de Julio de 1821',
      '28 de Julio de 1882',
    ],
    correntAnswer: 2
  }, 
  {
    question: 'Cuando es el dia de la independencia del Peru 4',
    alternatives: [
      '28 de Julio de 1981',
      '28 de Julio de 1881',
      '28 de Julio de 1821',
      '28 de Julio de 1882',
    ],
    correntAnswer: 2
  }
]

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(()=>{
    setQuestions(data);
  }, [])

  const nextQuestion = () =>{
    setCurrentQuestion(currentQuestion+1)
  }

  return (
   <div className="bg-appBlue h-screen text-appGrey">
      <div className="container mx-auto px-6 py-7">
      <header>
        <h3 className="font-semibold mb-3 text-appTransparent ">Examen de historia</h3>
        <h2 className="border-dashed font-semibold mb-8 text-appGrey text-2xl">Pregunta 06/20</h2>
      </header>
      {
        questions.length>0 && <Question question={questions[currentQuestion]} nextQuestion={nextQuestion}/>
      }
   </div>
   </div>
  )
}

export default App;