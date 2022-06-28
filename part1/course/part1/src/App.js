const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Part = (props) => {
    console.log(props)
    return (
      <div>
        <p>
          {props.parts.name} {props.parts.exercises}
        </p>
      </div>
    )
  }


  const Header = (props) => {
    console.log(props)
    return <h1>{props.course.name}</h1>
  }

  const Content = (props) => {
    console.log(props)
    return (
      <div>
        <Part parts={props.course.parts[0]} />
        <Part parts={props.course.parts[1]} />
        <Part parts={props.course.parts[2]} />
      </div>
    )
  }
  const Total = (props) => {
    console.log(props.course.parts[1])
    return (
      <div>
        <p>Total number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
      </div>
    )
  }
  return (
    <div>
      <Header course={course} />
      {/* //<h1>Hlf Stack application development</h1> */}
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App

