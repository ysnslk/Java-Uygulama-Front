import React from 'react'

const Skills = ({skills}) => {
  return (
    <section>
      <h2>Skills</h2>
      <ul className="ulDesign">
      {skills.map((data, index) => (
        <li key={index}>
          <h5>{data.head}</h5>
          <p>
          {data.text}
          </p>
        </li>
      ))}
      </ul>
    </section>
  )
}

export default Skills