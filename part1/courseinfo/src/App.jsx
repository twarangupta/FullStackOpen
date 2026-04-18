const Header = (props) => {
  return(
      <div>
    <h1>{props.course}</h1>
  </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>
        Number of exercises {props.exercises}
      </p>
    </div>
  )
}
const Part = (props) => {
  return(
    <div>
      {props.part.name} {props.part.exercises}
    </div>
  )
}

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14\

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
  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total exercises={
        course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises
      } />
    </div>
  )
}

export default App