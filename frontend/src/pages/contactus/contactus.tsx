import React, { useRef } from 'react';
import './contactus.css';
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);



  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(import.meta.env.VITE_SEND_FROM, import.meta.env.VITE_SEND_TEMPLATE, form.current, import.meta.env.VITE_PUB_KEY)
        .then(
          () => {
            toast.success("Email sent successfully!");
            form.current?.reset();
          },
          (error) => {
            toast.error("Failed to send email.");
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div className="ContactUsContainerByOpenSourceify">
     <ToastContainer />
      <h2 className="ContactUsTitleByOpenSourceify">Contact Us</h2>
      <p className="ContactUsMessageByOpenSourceify">
        As a developer of the OpenSourceify platform, an open-source platform, I welcome your feedback. If you need any enhancements or are facing any issues, please feel free to contact me.
      </p>
      <form ref={form} onSubmit={sendEmail} className="ContactUsFormByOpenSourceify">
        <div className="ContactUsFormGroupByOpenSourceify">
          <label htmlFor="name" className="ContactUsLabelByOpenSourceify">Name</label>
          <input type="text" id="name" name="from_name" className="ContactUsInputByOpenSourceify" required />
        </div>
        <div className="ContactUsFormGroupByOpenSourceify">
          <label htmlFor="email" className="ContactUsLabelByOpenSourceify">Email</label>
          <input type="email" id="email" name="email_id" className="ContactUsInputByOpenSourceify" required />
        </div>
        <div className="ContactUsFormGroupByOpenSourceify">
          <label htmlFor="message" className="ContactUsLabelByOpenSourceify">Message</label>
          <textarea id="message" name="message" className="ContactUsTextareaByOpenSourceify" rows={5} required></textarea>
        </div>
        <button type="submit" className="ContactUsButtonByOpenSourceify">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
