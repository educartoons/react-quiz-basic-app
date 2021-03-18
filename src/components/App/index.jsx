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
  const [points, setPoints] = useState(0);
  const [trap, setTrap] = useState(false);

  useEffect(()=>{
    setQuestions(data);
  }, [])

  const nextQuestion = (checkedAnswer, rightAnswer) =>{
   
    if(checkedAnswer===rightAnswer){
      setPoints(points+1);
    }
    setCurrentQuestion(currentQuestion+1)
  }

  return (
   <div className="bg-appBlue h-screen text-appGrey" onMouseLeave={()=>setTrap(true)}>
      <div className="container mx-auto px-6 py-7">
      <header>
        <h3 className="font-semibold mb-3 text-appTransparent ">Examen de historia</h3>
        <h2 className="border-dashed font-semibold mb-8 text-appGrey text-2xl">Pregunta {currentQuestion+1}/{questions.length}</h2>
      </header>
      {trap && <h2 className="text-3xl text-red-500">Oye estas haciendo trampa!</h2>}
      {
        questions.length>0 && currentQuestion<questions.length ? <Question question={questions[currentQuestion]} nextQuestion={nextQuestion} indexCurrentQuestion={currentQuestion} totalQuestions={questions.length}/> : ''
      }

      {
        currentQuestion===questions.length ? <h2>Acertaste {points} preguntas de {questions.length} </h2> : ''
      }
   </div>
   </div>
  )
}

export default App;