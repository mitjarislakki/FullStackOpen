const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part => <Part key={part.name} part={part}/>)}  
  </>

const Course = ({ course }) => {
  return(
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total sum={course.parts.reduce((a, b) => a + b.exercises, 0)
    }
       />
  </div>)
}

export default Course