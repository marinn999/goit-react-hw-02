import { useState, useEffect } from "react";
import Description from "./Description";
import Feedback from "./Feedback";
import Options from "./Options";
import Notification from "./Notification";

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    // Перевіряємо, чи є дані в локальному сховищі
    const savedFeedbacks = localStorage.getItem("feedbacks");
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks));
    }
  }, []);

  useEffect(() => {
    // Зберігаємо дані в локальному сховищі при зміні стану
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    const resetFeedbacks = { good: 0, neutral: 0, bad: 0 };
    setFeedbacks(resetFeedbacks);
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const positiveFeedback = totalFeedback
    ? Math.round((feedbackTypes.good / totalFeedback) * 100)
    : 0;
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
};

export default App;
