import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './components/QuestionCard';
import { fetchQuestions, Difficulty, QuestionState } from './Api'
// import { loadavg } from 'os';
import { GlobalStyle, Wrapper } from './App.styles';

const Total_Questions = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const [Loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuestions(Total_Questions, Difficulty.EASY))

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestion = await fetchQuestions(Total_Questions, Difficulty.EASY)
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }
  const nextQuestion = async () => {

    const nextQuestion = number + 1;
    if (nextQuestion === Total_Questions) {
      setGameOver(true);
    }
    else {
      setNumber(nextQuestion);
    }

  }
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) {
        setScore(prev => prev + 1)
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }

      setUserAnswer(prev => [...prev, answerObject])

    }

  }


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Quiz</h1>
        {gameOver || userAnswer.length === Total_Questions ? (
          <button className="start" onClick={startQuiz}>
            Begain Quiz
          </button>
        ) : null}

        {!gameOver ? (
          <p className="score">Score: {score}</p>
        ) : null
        }
        {Loading ? (
          <p>Loading....</p>
        ) : null}

        {!Loading && !gameOver ? (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={Total_Questions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswer ? userAnswer[number] : undefined}
            callback={checkAnswer}
          />) : null
        }

        {!gameOver && !Loading && userAnswer.length === number + 1 && number !== Total_Questions - 1 ? (
          <button className="next" onClick={nextQuestion}>Next</button>
        ) : null
        }
      </Wrapper>

    </>
  );
}

export default App;
