import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactSection.css";

// const ContactSection = () => {
//   const form = useRef();
//   const [errorMessage, setErrorMessage] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const formData = new FormData(form.current);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const message = formData.get("message");

//     if (!name || !email || !message) {
//       setErrorMessage("All fields are required!");
//       return;
//     }

//     emailjs
//       .sendForm(
//         "service_0orlrkc",
//         "template_fabncd4",
//         form.current,
//         "mqYufy-Epq6lV-Wdk",
//       )
//       .then(
//         (result) => {
//           setErrorMessage("");
//           alert("Email sent successfully!");
//           e.target.reset();
//         },
//         (error) => {
//           alert("An error occurred while sending the email.");
//         },
//       );
//   };

//   return (
//     <section id="contact-section">
//       <div className="contact-wrapper">
//         <div className="contact-container">
//           <h1 className="contact-headline">Get in Touch</h1>
//           <div className="contact-methods">
//             <div className="contact-form">
//               <form ref={form} onSubmit={sendEmail}>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   name="name"
//                   className="contact-input"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="contact-input"
//                 />
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   className="contact-textarea"
//                 ></textarea>
//                 {errorMessage && (
//                   <div className="error-message">{errorMessage}</div>
//                 )}
//                 <button type="submit" className="contact-button">
//                   Send Message 3
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
const ContactSection = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setErrorMessage("All fields are required!");
      setSuccessMessage("");
      return;
    }

    // Perform email validation here if needed

    emailjs
      .sendForm(
        "service_0orlrkc",
        "template_fabncd4",
        form.current,
        "mqYufy-Epq6lV-Wdk"
      )
      .then(
        (result) => {
          setErrorMessage("");
          setSuccessMessage("Email sent successfully!");
          e.target.reset();
        },
        (error) => {
          setErrorMessage("An error occurred while sending the email.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <section id="contact-section">
      <div className="contact-wrapper">
        <div className="contact-container">
          <h1 className="contact-headline">Get in Touch</h1>
          <div className="contact-methods">
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="contact-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="contact-input"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="contact-textarea"
                ></textarea>
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
                <button type="submit" className="contact-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
