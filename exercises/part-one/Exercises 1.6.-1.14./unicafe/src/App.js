import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const DisplayStatistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <div>Good Feedback: {good}</div>
      <div>Neutral Feedback: {neutral}</div>
      <div>Bad Feedback: {bad}</div>
      <div>Total Feedback: {good + neutral + bad} </div>
      <div>Average Feedback: {(good + neutral + bad) / 3} </div>
      <div>
        % of Positive Feedback: {(good * 100) / (good + neutral + bad)} %{" "}
      </div>
    </div>
  );
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give Feedback!</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <h2>Statistics</h2>
      <DisplayStatistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
