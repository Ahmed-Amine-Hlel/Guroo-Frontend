import { useAppSelector } from "../hooks/hooks";

const EditQuestions = () => {
  const questionsWithAnswers = useAppSelector(
    (state) => state.businessPlan.currentQuestionsWithAnswers
  );
  console.log("questionsWithAnswers", questionsWithAnswers);

  return <div>EditQuestions</div>;
};

export default EditQuestions;
