import { useState } from "react";

const Button = (props) => {
  // console.log(props);
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

const Display = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props.selected.anecdote}</div>
      <div>has {props.selected.vote} votes</div>{" "}
    </div>
  );
};
// const DisplayVotes = (props) => <div>has {props.vote} votes</div>;

const App = () => {
  const anecdotes = [
    {
      anecdote: "If it hurts, do it more often.",
      vote: [],
    },
    {
      anecdote: "Adding manpower to a late software project makes it later!",
      vote: [],
    },
    {
      anecdote:
        "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      vote: [],
    },
    {
      anecdote:
        "Any foos can write code that a computer can understand. Good programers write code that humans can understand.",
      vote: [],
    },
    {
      anecdote: "Premature optimization is the root of all evil.",
      vote: [],
    },
    {
      anecdote:
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      vote: [],
    },
    {
      anecdote:
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      vote: [],
    },
  ];

  const getRandom = () => {
    return anecdotes[Math.floor(Math.random() * anecdotes.length)];
  };
  const [selected, setSelected] = useState(getRandom());
  const [votes, setVotes] = useState(0);
  // const [allPoints, setAllPoints] = useState([]);

  const handleRandom = () => {
    // console.log(props);
    return setSelected(getRandom());
  };

  const handleVote = (props) => {
    console.log(props);
    return setVotes(props.vote.push(...selected.vote, 1));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display selected={selected} />
      {/* <DisplayVotes vote={vote.vote} /> */}
      <div>
        <Button handleClick={handleVote} text="vote" />
        <Button handleClick={handleRandom} text="next anecdote" />
      </div>
      <h1>Anecdote with most votes</h1>
    </div>
  );
};

export default App;
