import React from 'react';

const Header = ({ course }) => (
      <h2>{course.name}</h2>
)

const Total = ({course}) => {
    const sum = course.parts.reduce((total, part) => total + part.exercises
    , 0)
    return(
        <p><b>total of {sum} exercises</b></p>
    ) 
}

const Part = ({part}) => (
    <p>{part.name} {part.exercises}</p>
)

const Parts = ({parts}) => (
    parts.map(part => (
            <Part key = {part.id} part = {part}/>
        )
    )
)

const Content = ({course}) => (
    <>
        <Parts key = {course.id} parts = {course.parts}/>
    </>
)

const Course = ({course}) => (
        <div>
            <Header course = {course}/>
            <Content course = {course}/>
            <Total course = {course}/>
        </div>
)

export default Course