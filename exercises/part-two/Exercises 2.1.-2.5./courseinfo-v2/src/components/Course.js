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
  const total = course[0].parts.reduce((s, p) => {
    return { exercises: s.exercises + p.exercises };
  });

  const ContentNode = ({ parts }) => (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Total part={total2} />
    </>
  );

  const total2 = course[1].parts.reduce((s, p) => {
    return { exercises: s.exercises + p.exercises };
  });

  const Total = ({ part }) => (
    <p>
      <strong>total of {part.exercises} exercises</strong>
    </p>
  );

  return (
    <div>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Header course={course[1].name} />
      <ContentNode parts={course[1].parts} />
    </div>
  );
};

export default Course;
