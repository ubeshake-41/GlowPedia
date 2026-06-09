import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { freeQuizzes } from '../data/quizzes';
import styles from './QuizFlow.module.css';

export default function QuizFlow() {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  
  const quiz = freeQuizzes.find(q => q.id === quizId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  
  if (!quiz) {
    return (
      <div className={styles.notFound}>
        <h1>Quiz not found</h1>
        <button onClick={() => navigate('/quizzes')} className="btn-primary">
          Back to Quizzes
        </button>
      </div>
    );
  }
  
  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - navigate to results
      const result = quiz.resultLogic(newAnswers);
      navigate(`/quiz/${quizId}/result`, { state: { result, answers: newAnswers } });
    }
  };
  
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    } else {
      navigate('/quizzes');
    }
  };
  
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const question = quiz.questions[currentQuestion];
  
  return (
    <div className={styles.quizFlow}>
      {/* Header */}
      <div className={styles.header}>
        <button onClick={handleBack} className={styles.backButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </button>
        <h1>{quiz.title}</h1>
      </div>
      
      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
        <span className={styles.progressText}>
          Question {currentQuestion + 1} of {quiz.questions.length}
        </span>
      </div>
      
      {/* Question */}
      <div className={styles.questionContainer}>
        <h2 className={styles.question}>{question.question}</h2>
        
        <div className={styles.options}>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={styles.optionButton}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className={styles.optionText}>{option}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
