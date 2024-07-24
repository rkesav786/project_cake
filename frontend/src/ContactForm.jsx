// ContactForm.js

import React from 'react';
import CUS from './ContactForm.module.css'; // Import CSS module
import Navbar from './component/Navbar';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    // Add form submission logic here
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#fff0f7" }}>
        <h1 className={CUS.h1}>Contact Us</h1>
        <p className={CUS.p1}>We would love to hear from you. Share your thoughts and queries with us!</p>

        <div className="row">
          <div className="col-sm-6">
            <div className={CUS.contactform}>
              <form onSubmit={handleSubmit}>
                <div className={CUS.formrow}>
                  <div className={CUS.formgroup}>
                    <label className={CUS.label} htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" className={CUS.inputfield} required />
                  </div>
                  <div className={CUS.formgroup}>
                    <label className={CUS.label} htmlFor="contactNo">Contact No</label>
                    <input type="text" id="contactNo" name="contactNo" className={CUS.inputfield} required />
                  </div>
                </div>
                <div className={CUS.formrow}>
                  <div className={CUS.formgroup}>
                    <label className={CUS.label} htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className={CUS.inputfield} required />
                  </div>
                  <div className={CUS.formgroup}>
                    <label className={CUS.label} htmlFor="city">City</label>
                    <input type="text" id="city" name="city" className={CUS.inputfield} />
                  </div>
                </div>
                <div className={CUS.formgroup}>
                  <label className={CUS.label} htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" className={CUS.inputfield} required />
                </div>
                <div className={CUS.formgroup}>
                  <label className={CUS.label} htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="4" className={CUS.textareafield} required></textarea>
                </div>
                <button type="submit" className={CUS.submitbutton}>Submit</button>
              </form>
            </div>
          </div>
          <div className='col-sm-4'style={{marginTop:120 }}> 
<h5 className='fw-bolder'>Yummy cakes Foods Private Limited</h5>
<p>Registered Address:
32/33 A, Deonar Village Road, Opp. Metal Box Company, Govandi East,
Mumbai-400088, </p>
<p>
Grievance & Nodal Officer:
Ms. Simantini Budukh,
General Counsel & Company Secretary
</p><p>
Contact Details:
 +91 8182-881881
 contact@theobroma.in</p>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default ContactForm;
