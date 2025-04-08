import React from 'react'
import "./styles/Contact.css"
import Swal from 'sweetalert2'

export default function Contact ({open}){
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "38769c77-178e-4e1f-8d7b-e3ec7115d9ae");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully!",
            icon: "okay"
          }
        
        );event.target.reset();
      }
    };

    return(
        <section className={`contact ${open ? "open" : ""}`}>
          <form onSubmit={onSubmit}>
            <h2>Contact me!</h2>
            <div className="form">
                <label>Full Name</label>
                <input className="field" type='text' placeholder="Enter your full Name" required/>
            </div>
            <div className="form">
                <label>Email</label>
                <input className="field" type='text' placeholder="Enter your Email" required/>
            </div>
        <div className="form">
            <label >Message</label>
            <textarea className="field-mess" name="message" id="message" placeholder='Write your Message'></textarea>
        </div>
        <button className="form-button">SUBMIT</button>


            </form> 
        </section>
    )
}