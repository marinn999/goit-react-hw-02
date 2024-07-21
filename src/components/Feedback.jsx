const Feedback = ({ feedbacks, totalFeedback }) => {
  return (
    <div>
      <p>Good: {feedbacks.good}</p>
      <p>Neutral: {feedbacks.neutral}</p>
      <p>Bad: {feedbacks.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round((feedbacks.good / totalFeedback) * 100)}%</p>
    </div>
  );
};

export default Feedback;
