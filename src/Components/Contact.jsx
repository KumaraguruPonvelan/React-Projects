import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3d9a601f-5c54-42e8-a82a-16893816e2e7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };
  return (
    <section className='contact'>
      <form onSubmit={onSubmit}>
        <h2>
          Contact Me
        </h2>
        <div className='input-box'>
          <label>Full Name</label>
          <input type='text' className='field' placeholder='Enter your name' name='name' required/>
        </div>
        <div className='input-box'>
          <label>Email</label>
          <input type='email' className='field' placeholder='Enter your email' name='email' required/>
        </div>
        <div className='input-box'>
          <label>Your Message</label>
      <textarea name='message'  className='field mess' placeholder='Enter your Message' required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  )
}

export default Contact
