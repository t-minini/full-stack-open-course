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
        <StatisticsLine text="GOOD" value={props.good} />
        <StatisticsLine text="NEUTRAL" value={props.neutral} />
        <StatisticsLine text="BAD" value={props.bad} />
        <StatisticsLine
          text="TOTAL"
          value={props.good + props.neutral + props.bad}
        />
        <StatisticsLine
          text="AVERAGE"
          value={((props.good + props.neutral + props.bad) / 3).toFixed(1)}
        />
        <StatisticsLine
          text="POSITIVE"
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
    <table>
      <tbody>
        <tr>
          <td style={{ width: 90 }}>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </tbody>
    </table>
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
      <h1>GIVE FEEDBACK</h1>
      <Button handleClick={handleGoodClick} text="GOOD" />
      <Button handleClick={handleNeutralClick} text="NEUTRAL" />
      <Button handleClick={handleBadClick} text="BAD" />
      <h2>STATISTICS</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <h5>
        MADE BY &nbsp;
        <a href="https://github.com/t-minini" target="_blank" rel="noreferrer">
          TULIO MININI
        </a>
      </h5>
    </>
  );
};

export default App;
