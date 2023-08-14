import React from "react";

const About = ({ about }) => {
  return (
    <section>
      {about.map((data,index) => (
        <div className={data.class} key={index}>
          <h3>{data.head}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </section>
  );
};

export default About;
