import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({ questions, onDeleteQuestion, onUpdateAnswer }) {


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul className="questions">
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onUpdateAnswer={onUpdateAnswer} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
