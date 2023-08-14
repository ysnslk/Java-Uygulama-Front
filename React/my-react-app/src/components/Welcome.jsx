import React from "react";

const Welcome = ({ welcome, links }) => {
  return (
    <main>
      <h3>{welcome.header}</h3>
      <p>{welcome.text}</p>
      <img src={welcome.img} alt="Profile Picture" />
      <ul>
        {links.map((data, index) => (
          <li key={index}>
            <a href={data.href}>
              <i className={data.class}></i>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Welcome;
