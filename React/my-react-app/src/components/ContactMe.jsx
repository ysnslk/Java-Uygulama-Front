import React from 'react'

const ContactMe = () => {
  return (
    <section>
      <h2>Contact Me</h2>
      <label htmlFor="nameId">Name:</label>
      <input type="text" id="nameId" />
      <label htmlFor="emailId">Email:</label>
      <input type="email" id="emailId" />
      <label htmlFor="messageId">Message:</label>
      <textarea id="messageId" cols="30" rows="10"></textarea>
      <input type="button" className="buttonSend" value="Send" />
    </section>
  )
}

export default ContactMe