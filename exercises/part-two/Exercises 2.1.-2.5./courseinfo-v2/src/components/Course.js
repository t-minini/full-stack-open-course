const Course = ({ course }) => {
  const Header = ({ course }) => <h1>{course}</h1>;

  const Part = ({ part }) => (
    <p>
      {part.name} {part.exercises}
    </p>
  );

  const Content = ({ parts }) => (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Part part={parts[3]} />
      <Total part={total} />
    </>
  );

  const total = course.parts.reduce((s, p) => {
    return { exercises: s.exercises + p.exercises };
  });
  // console.log(total);

  const Total = (props) => {
    // console.log(props);
    return (
      <p>
        <strong>total of {props.part.exercises} exercises</strong>
      </p>
    );
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export default Course;
