//rafce
import React from 'react'

const Nav = ({navBar}) => {
  return (
    <header>
      <nav className='nav'>
        <ul>
        {navBar.map((data, index) => (
        <li key={index}>
          <a href={data.href}>{data.name}</a>
        </li>
      ))}
          
        </ul>
      </nav>
    </header>
  )
}

export default Nav