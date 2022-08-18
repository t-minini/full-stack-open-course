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
      <Parts parts={props.parts} />
    </div>
  );
};

const Parts = (props) => {
  console.log(props);
  return (
    <>
      <p>
        <strong>{props.parts[0].name}</strong>
        <br /> No. of Exercises: {props.parts[0].exercises}
      </p>
      <p>
        <strong>{props.parts[1].name}</strong>
        <br /> No. of Exercises: {props.parts[1].exercises}
      </p>
      <p>
        <strong>{props.parts[2].name}</strong>
        <br /> No. of Exercises: {props.parts[2].exercises}
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
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack Application Development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a compoment",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default App;
