import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine
          text="all"
          value={props.good + props.neutral + props.bad}
        />
        <StatisticsLine
          text="average"
          value={((props.good + props.neutral + props.bad) / 3).toFixed(1)}
        />
        <StatisticsLine
          text="positive"
          value={
            (
              (props.good * 100) /
              (props.good + props.neutral + props.bad)
            ).toFixed(1) + " %"
          }
        />
      </div>
    );
  }
};

const StatisticsLine = (props) => {
  // console.log(props);
  return (
    <div>
      <div>
        {props.text} {props.value}
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
