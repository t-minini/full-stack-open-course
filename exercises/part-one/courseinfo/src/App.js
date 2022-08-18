const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part1 part1={props.part1} />
      <Part2 part2={props.part2} />
      <Part3 part3={props.part3} />
    </div>
  );
};

const Part1 = (props) => {
  console.log(props);
  return (
    <>
      <p>
        <strong>{props.part1.name}</strong>
        <br /> No. of Exercises: {props.part1.exercises}
      </p>
    </>
  );
};

const Part2 = (props) => {
  console.log(props);
  return (
    <>
      <p>
        <strong>{props.part2.name}</strong>
        <br /> No. of Exercises: {props.part2.exercises}
      </p>
    </>
  );
};

const Part3 = (props) => {
  console.log(props);
  return (
    <>
      <p>
        <strong>{props.part3.name}</strong>
        <br /> No. of Exercises: {props.part3.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        <strong>Total of exercises:</strong>&nbsp;
        {props.exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a compoment",
    exercises: 14,
  };

  return (
    <>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </>
  );
};

export default App;
